//functions

//addition 
function add(a, b) {
    return a + b;
};

console.log(add(1, 2));

//subtraction
function sub(a, b) {
    return a - b;
};



//multiplication
function mult(a, b) {
    return a * b;
};
// function multiply(...args) {
//     return args.reduce(function (a, b) {
//         return a * b;
//     })
// };



//division
function divide(a, b) {
    return a / b;
};




//variables
let num1 = "";
let num2 = "";
let operator;
let clicked = false;


function operate(opeartor, number1, number2) {
    if (opeartor == "+") {
        console.log(add(number1, number2));
    }
    else if (opeartor == "-") {
        console.log(subtract(number1, number2));
    }
    else if (opeartor == "*") {
        console.log(multiply(number1, number2));
    }
    else if (opeartor == "/") {
        console.log(divide(number1, number2));
    }
    else
        console.log("not a valid operation");
};

operate("+", 2, 1);

const display = document.querySelector('.display');

const oneBtn = document.querySelector('.one');

oneBtn.addEventListener("click", function () {

    if (clicked != true) {
        num1 += 1;
        display.textContent = num1;
    }
    else {
        num2 += 1;
        display.textContent = num2;
    }
});

const twoBtn = document.querySelector('.two');
twoBtn.addEventListener("click", function () {
    if (clicked != true) {
        num1 += 2;
        display.textContent = num1;
    }
    else {
        num2 += 2;
        display.textContent = num2;
    }
});
const threeBtn = document.querySelector('.three');
threeBtn.addEventListener("click", function () {
    if (clicked != true) {
        num1 += 3;
        display.textContent = num1;
    }
    else {
        num2 += 3;
        display.textContent = num2;
    }
});

const fourBtn = document.querySelector('.four');
fourBtn.addEventListener("click", function () {
    if (clicked != true) {
        num1 += 4;
        display.textContent = num1;
    }
    else {
        num2 += 4;
        display.textContent = num2;
    }
});

const fiveBtn = document.querySelector('.five');
fiveBtn.addEventListener("click", function () {
    if (clicked != true) {
        num1 += 5;
        display.textContent = num1;
    }
    else {
        num2 += 5;
        display.textContent = num2;
    }
});

const sixBtn = document.querySelector('.six');
sixBtn.addEventListener("click", function () {
    if (clicked != true) {
        num1 += 6;
        display.textContent = num1;
    }
    else {
        num2 += 6;
        display.textContent = num2;
    }
});

const sevenBtn = document.querySelector('.seven');
sevenBtn.addEventListener("click", function () {
    if (clicked != true) {
        num1 += 7;
        display.textContent = num1;
    }
    else {
        num2 += 7;
        display.textContent = num2;
    }
});

const eightBtn = document.querySelector('.eight');
eightBtn.addEventListener("click", function () {
    if (clicked != true) {
        num1 += 8;
        display.textContent = num1;
    }
    else {
        num2 += 8;
        display.textContent = num2;
    }
});

const nineBtn = document.querySelector('.nine');
nineBtn.addEventListener("click", function () {
    if (clicked != true) {
        num1 += 9;
        display.textContent = num1;
    }
    else {
        num2 += 9;
        display.textContent = num2;
    }
});

const zeroBtn = document.querySelector('.zero');
zeroBtn.addEventListener("click", function () {
    if (clicked != true) {
        num1 += 0;
        display.textContent = num1;
    }
    else {
        num2 += 0;
        display.textContent = num2;
    }
});

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener("click", function () {
    display.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
    clicked = false;
});

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener("click", function () {
    clicked = true;
    operator = divide;
});

const multBtn = document.querySelector('.multiply');
multBtn.addEventListener("click", function () {
    clicked = true;
    operator = mult;
});

const subBtn = document.querySelector('.sub');
subBtn.addEventListener("click", function () {
    clicked = true;
    operator = sub;
});

const addBtn = document.querySelector('.add');
addBtn.addEventListener("click", function () {
    clicked = true;
    operator = add;
    console.log(clicked);
    console.log(num1);
    console.log(num2);

    console.log(operator);
});

const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener("click", function () {
    // let result = operator(num1, num2).toFixed(10);

    if (num1 === "" || num2 === "") {
        display.textContent = "error";
    }
    else if (operator(parseFloat(num1), parseFloat(num2)) % 1 != 0) {
        display.textContent = operator(num1, num2).toFixed(10);
    }
    else {
        display.textContent = operator(parseFloat(num1), parseFloat(num2));
    }
    num1 = "";
    num2 = "";
    operator = "";
    clicked = false;

});