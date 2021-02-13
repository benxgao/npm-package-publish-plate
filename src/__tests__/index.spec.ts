import plus from '../index';

describe('plus()', () => {
  test('works', () => {
    const stub = 1;
    const result = plus(stub);
    expect(result).toBe(1);
  });
});




