const divide = require('./solved')



test('10 / 3 should return 3', () => {
    expect(divide(10, 3)).toEqual(3);
});

test('-10 / 3 should return -3', () => {
    expect(divide(-10, 3)).toEqual(-3);
});

test('10 / -3 should return -3', () => {
    expect(divide(10, -3)).toEqual(-3);
});

test('-10 / -3 should return 3', () => {
    expect(divide(-10, -3)).toEqual(3);
});

test('-10 / -13 should return 0', () => {
    expect(divide(-10, -13)).toEqual(0);
});

test('-10 / -10 should return 1', () => {
    expect(divide(-10, -10)).toEqual(1);
})

test('10 / 10 should return 1', () => {
    expect(divide(10, 10)).toEqual(1);
});

test('10 / 0 should return undefinded', () => {
    expect(divide(10, 0)).toEqual(undefined);
});

test('0 / 10 should return 0', () => {
    expect(divide(0, 10)).toEqual(0);
});

