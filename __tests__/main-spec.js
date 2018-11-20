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

it ('x=3, y=5 should return Multiplication Table', () => {
    expect(printMultiplicationTableAtRange(2, 4)).toBe("2*2=4\n"+
    "2*3=6  3*3=9\n"+
    "2*4=8  3*4=12  4*4=16");
});