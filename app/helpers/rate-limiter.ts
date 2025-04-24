type RateLimitEntry = {
  lastAccess: number;
  count: number;
};

const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 5;

const rateLimitMap = new Map<string, RateLimitEntry>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry) {
    rateLimitMap.set(key, { lastAccess: now, count: 1 });
    return false;
  }

  if (now - entry.lastAccess > RATE_LIMIT_WINDOW) {
    // reset the window
    rateLimitMap.set(key, { lastAccess: now, count: 1 });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  rateLimitMap.set(key, entry);
  return false;
}
