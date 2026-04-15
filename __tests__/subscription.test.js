function extend(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

describe('Subscription extension', () => {

  test('extend by 1 day', () => {
    const result = extend(new Date('2025-01-01'), 1);
    expect(result.getDate()).toBe(2);
  });

  test('extend by 5 days', () => {
    const result = extend(new Date('2025-01-01'), 5);
    expect(result.getDate()).toBe(6);
  });

  test('extend by 30 days', () => {
    const result = extend(new Date('2025-01-01'), 30);
    expect(result.getDate()).toBe(31);
  });

  test('extend by 0 days (edge case)', () => {
    const result = extend(new Date('2025-01-01'), 0);
    expect(result.getDate()).toBe(1);
  });

  test('extend negative days (edge case)', () => {
    const result = extend(new Date('2025-01-10'), -5);
    expect(result.getDate()).toBe(5);
  });

});