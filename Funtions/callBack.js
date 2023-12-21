function performOperation(x, y, operation) {
    return operation(x, y);
}

function add(x, y) {
    return x + y;
}

var result = performOperation(3, 4, add); // result is 7
