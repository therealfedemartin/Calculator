
//**** CREATE CALCULATION FUNCTIONS *****

function add (a, b) {
    return (a + b);
}

function subtract (a, b) {
    return (a - b);
}

function multiply (a, b) {
    return (a * b);
}

function divide (a, b) {
    return (a / b);
}

//**** CREATE VARIABLES ****

let firstNumber;
let operators;
let secondNumber;

//**** CREATE FUNCTION THAT CALLS CALCULATION FUNCTIONS ****

function operate (numberOne, operator, numberTwo) {
    let numberOne = a;
    let numberTwo = b;
    
    switch (operator) {
        case clickAdd:
            return add(a, b);  
        case clickSubtract:
            return subtract(a, b);
        case clickMultiply:
            return multiply(a, b);
        case clickDivide:
            return divide(a, b);
    }
}