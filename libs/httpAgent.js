import http from 'http';
import https from 'https';

// Shared HTTP agent with keep-alive for connection reuse
// These agents will be used by Node.js http/https modules
// Note: Native fetch() uses undici and doesn't support agent option,
// but setting global defaults helps with any http/https module usage
const httpAgent = new http.Agent({
  keepAlive: true,
  keepAliveMsecs: 30000, // Keep connections alive for 30 seconds
  maxSockets: 50, // Max concurrent connections per host
  maxFreeSockets: 10, // Max free sockets to keep open
  timeout: 15000, // Socket timeout
});

const httpsAgent = new https.Agent({
  keepAlive: true,
  keepAliveMsecs: 30000,
  maxSockets: 50,
  maxFreeSockets: 10,
  timeout: 15000,
});

// Set as global defaults for http/https modules
// This helps with connection reuse for any http/https requests
if (typeof global !== 'undefined') {
  global.httpAgent = httpAgent;
  global.httpsAgent = httpsAgent;
}

// Export agents for direct use if needed
export { httpAgent, httpsAgent };

// Note: Next.js fetch() uses undici which has its own connection pooling
// The agents above help with any direct http/https module usage
// For fetch(), connection pooling happens at the undici level automatically

