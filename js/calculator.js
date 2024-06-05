//addition 
function add(...args) {
    return args.reduce(function (a, b) {
        return a + b;
    })
};

console.log(add(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));

//subtraction
function subtract(...args) {
    return args.reduce(function (a, b) {
        return a - b;
    })
};

console.log(subtract(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));

//multiplication
function multiply(...args) {
    return args.reduce(function (a, b) {
        return a * b;
    })
};

console.log(multiply(1, 2, 3, 4, 5, 6, 7, 8, 9));

//division
function divide(...args) {
    return args.reduce(function (a, b) {
        return a / b;
    })
};

console.log(divide(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
