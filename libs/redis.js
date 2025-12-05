import Redis from "ioredis";

const redis = new Redis({
  host: "127.0.0.1",
  port: 6379,
  maxRetriesPerRequest: 3, // Limit retries to prevent hanging
  enableOfflineQueue: false,
  connectTimeout: 10000, // 10 second connection timeout
  lazyConnect: false,
  keepAlive: 30000, // Keep connections alive
  family: 4, // Use IPv4
  retryStrategy: (times) => {
    if (times > 3) {
      return null; // Stop retrying after 3 attempts
    }
    return Math.min(times * 200, 2000); // Exponential backoff, max 2s
  },
});

export default redis;