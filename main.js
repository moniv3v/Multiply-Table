function isValidRange(x, y) {
    return x < y && (x >= 1 && y <= 1000);
}

function printMultiplicationTableAtRange(x, y) {
    if (isValidRange(x, y)) {
        var result = "";
        for (var i = x; i <= y; i++) {
            for (var j = x; j <= i; j++) {
                result = result+(j+"*"+i+"="+(i*j));
            }
            result= result+"\n";
        }
        console.log(result);
        return result;
    }

    return null;
}

module.exports = printMultiplicationTableAtRange;