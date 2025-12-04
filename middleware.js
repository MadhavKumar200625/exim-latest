import { NextResponse } from "next/server";

const WINDOW = 10_000; // 10 seconds
const LIMIT = 20;      
const BAN_TIME = 600_000;

const ipCounters = new Map();
const ipBans = new Map();

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

  // Check ban
  if (Date.now() < (ipBans.get(ip) || 0)) {
    return new NextResponse("Too Many Requests (Banned)", { status: 429 });
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
