interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const tracker = new Map<string, RateLimitRecord>();

/**
 * Basic in-memory rate limiter
 * Allows maxRequests per windowMs
 */
export function rateLimit(ip: string, maxRequests = 5, windowMs = 10 * 60 * 1000): { success: boolean; remaining: number } {
  const now = Date.now();
  const record = tracker.get(ip);

  // Clean up expired records
  if (record && now > record.resetAt) {
    tracker.delete(ip);
  }

  const current = tracker.get(ip);

  if (!current) {
    tracker.set(ip, {
      count: 1,
      resetAt: now + windowMs,
    });
    return { success: true, remaining: maxRequests - 1 };
  }

  if (current.count >= maxRequests) {
    return { success: false, remaining: 0 };
  }

  current.count += 1;
  return { success: true, remaining: maxRequests - current.count };
}

