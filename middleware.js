import { NextResponse } from "next/server";

const WINDOW = 10_000; // 10 seconds
const LIMIT = 20;      
const BAN_TIME = 600_000;
const MAX_MAP_SIZE = 10_000; // Prevent unbounded growth
const CLEANUP_INTERVAL = 30_000; // Clean every 30 seconds

const ipCounters = new Map();
const ipBans = new Map();

// Whitelist legitimate crawlers
const LEGITIMATE_BOTS = [
  'googlebot', 'googlebot-news', 'googlebot-image', 'googlebot-video', 'googlebot-mobile',
  'bingbot', 'msnbot', 'slurp', 'duckduckbot', 'baiduspider', 'yandexbot',
  'facebookexternalhit', 'twitterbot', 'rogerbot', 'linkedinbot', 'embedly',
  'quora link preview', 'showyoubot', 'outbrain', 'pinterest', 'slackbot',
  'vkShare', 'W3C_Validator', 'whatsapp', 'flipboard', 'tumblr', 'bitlybot',
  'skypeuripreview', 'nuzzel', 'discordbot', 'qseo', 'applebot', 'redditbot',
  'semrushbot', 'ahrefsbot', 'dotbot', 'mj12bot', 'megaindex', 'blexbot'
];

function isLegitimateBot(userAgent) {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return LEGITIMATE_BOTS.some(bot => ua.includes(bot));
}

// Protect everything under these prefixes:
const PROTECT = [
  "/search",
  "/global-products",
  "/global-companies",
  "/global-ports",
];

function isProtected(path) {
  return PROTECT.some(prefix => path.startsWith(prefix));
}

// Cleanup expired entries
function cleanup() {
  const now = Date.now();
  
  // Clean counters
  for (const [ip, obj] of ipCounters.entries()) {
    if (now - obj.ts > WINDOW) {
      ipCounters.delete(ip);
    }
  }
  
  // Clean bans
  for (const [ip, banTime] of ipBans.entries()) {
    if (now >= banTime) {
      ipBans.delete(ip);
    }
  }
  
  // Enforce max size - remove oldest entries if needed
  if (ipCounters.size > MAX_MAP_SIZE) {
    const entries = Array.from(ipCounters.entries())
      .sort((a, b) => a[1].ts - b[1].ts);
    const toRemove = ipCounters.size - MAX_MAP_SIZE;
    for (let i = 0; i < toRemove; i++) {
      ipCounters.delete(entries[i][0]);
    }
  }
  
  if (ipBans.size > MAX_MAP_SIZE) {
    const entries = Array.from(ipBans.entries())
      .sort((a, b) => a[1] - b[1]);
    const toRemove = ipBans.size - MAX_MAP_SIZE;
    for (let i = 0; i < toRemove; i++) {
      ipBans.delete(entries[i][0]);
    }
  }
}

// Start periodic cleanup
let cleanupTimer;
if (typeof setInterval !== 'undefined') {
  cleanupTimer = setInterval(cleanup, CLEANUP_INTERVAL);
}

function incr(ip) {
  const now = Date.now();
  const obj = ipCounters.get(ip);

  if (!obj || now - obj.ts > WINDOW) {
    const o = { count: 1, ts: now };
    ipCounters.set(ip, o);
    return o;
  }

  obj.count++;
  return obj;
}

export function middleware(req) {
  const path = req.nextUrl.pathname;

  // Apply limiter only to protected sections
  if (!isProtected(path)) return NextResponse.next();

  const ip =
    req.ip ||
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    "unknown";

  // Allow legitimate bots through
  const userAgent = req.headers.get("user-agent") || "";
  if (isLegitimateBot(userAgent)) {
    return NextResponse.next();
  }

  // Check ban
  const banTime = ipBans.get(ip);
  if (banTime && Date.now() < banTime) {
    return new NextResponse("Too Many Requests (Banned)", { status: 429 });
  }

  // Clean expired ban if exists
  if (banTime && Date.now() >= banTime) {
    ipBans.delete(ip);
  }

  const counter = incr(ip);

  if (counter.count > LIMIT) {
    ipBans.set(ip, Date.now() + BAN_TIME);
    return new NextResponse("Too Many Requests (Rate Limited)", { status: 429 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt).*)"],
};
