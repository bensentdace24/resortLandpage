import { describe, expect, it } from 'vitest';
import { calculateEstimate } from './booking';

describe('calculateEstimate', () => {
  it('counts nights and applies the selected sample room rate', () => {
    expect(calculateEstimate({ checkIn: '2026-09-10', checkOut: '2026-09-12', guests: 2, room: 'standard' })).toEqual({ nights: 2, total: 7000, extraGuests: 0 });
  });

  it('adds the sample excess-person fee above room capacity', () => {
    expect(calculateEstimate({ checkIn: '2026-09-10', checkOut: '2026-09-11', guests: 4, room: 'standard' }).total).toBe(5500);
  });

  it('returns null for an invalid date range', () => {
    expect(calculateEstimate({ checkIn: '2026-09-12', checkOut: '2026-09-10', guests: 2, room: 'standard' })).toBeNull();
  });
});
