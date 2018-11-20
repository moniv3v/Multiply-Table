const printMultiplicationTableAtRange = require('../main');

it ('x>=y should return null', () => {
    expect(printMultiplicationTableAtRange(5, 3)).toBe(null);
});