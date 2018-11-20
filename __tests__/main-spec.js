const printMultiplicationTableAtRange = require('../main');

it ('x>=y should return null', () => {
    expect(printMultiplicationTableAtRange(5, 3)).toBe(null);
});

it ('x<1 should return null', () => {
    expect(printMultiplicationTableAtRange(0, 3)).toBe(null);
});

it ('y>1001 should return null', () => {
    expect(printMultiplicationTableAtRange(1, 1001)).toBe(null);
});
