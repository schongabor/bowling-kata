import { Roll } from './index';

describe('Roll', () => {
  it('returns a number equal or higher than 0', () => {
    const results: number[] = [];
    for (let i = 0; i < 1000; i++) {
      results.push(Roll.create().pins(10));
    }
    expect( Math.min(...results)).toBeGreaterThan(-1);
  });

  it('returns a number lower or equal than 10', () => {
    const results: number[] = [];
    for (let i = 0; i < 1000; i++) {
      results.push(Roll.create().pins(10));
    }
    expect( Math.max(...results)).toBeLessThan(11);
  });
});