
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
//**** CREATE FUNCTION THAT CALLS CALCULATION FUNCTIONS ****

function operate (numberOne, operator, numberTwo) {
    switch (operator) {
        case clickAdd:
            return add(numberOne, numberTwo);  
        case clickSubtract:
            return subtract(numberOne, numberTwo);
        case clickMultiply:
            return multiply(numberOne, numberTwo);
        case clickDivide:
            return divide(numberOne, numberTwo);
    }
}

let operators;
let secondNumber;
let firstNumber;

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");

const addBTN = document.querySelector(".addBTN");

const display = document.querySelector("#display");
const clear = document.querySelector(".clear");

display.textContent = "0";

one.addEventListener('click', () => {
    if (display.textContent.length < 16) {
        if (display.textContent === "0") {
            display.textContent = "1";
        } else {
            display.textContent += "1";
        }
    }
    addBTN.style.opacity = "1";
});

two.addEventListener('click', () => {
    if (display.textContent.length < 16) {
        if (display.textContent === "0") {
            display.textContent = "2";
        } else {
            display.textContent += "2";
        }
    }
    addBTN.style.opacity = "1";
});

three.addEventListener('click', () => {
    if (display.textContent.length < 16) {
        if (display.textContent === "0") {
            display.textContent = "3";
        } else {
            display.textContent += "3";
        }
    }
    addBTN.style.opacity = "1";
});

four.addEventListener('click', () => {
    if (display.textContent.length < 16) {
        if (display.textContent === "0") {
            display.textContent = "4";
        } else {
            display.textContent += "4";
        }
    }
    addBTN.style.opacity = "1";
});

five.addEventListener('click', () => {
    if (display.textContent.length < 16) {
        if (display.textContent === "0") {
            display.textContent = "5";
        } else {
            display.textContent += "5";
        }
    }
    addBTN.style.opacity = "1";
});

six.addEventListener('click', () => {
    if (display.textContent.length < 16) {
        if (display.textContent === "0") {
            display.textContent = "6";
        } else {
            display.textContent += "6";
        }
    }
    addBTN.style.opacity = "1";
});

seven.addEventListener('click', () => {
    if (display.textContent.length < 16) {
        if (display.textContent === "0") {
            display.textContent = "7";
        } else {
            display.textContent += "7";
        }
    }
    addBTN.style.opacity = "1";
});

eight.addEventListener('click', () => {
    if (display.textContent.length < 16) {
        if (display.textContent === "0") {
            display.textContent = "8";
        } else {
            display.textContent += "8";
        }
    }
    addBTN.style.opacity = "1";
});

nine.addEventListener('click', () => {
    if (display.textContent.length < 16) {
        if (display.textContent === "0") {
            display.textContent = "9";
        } else {
            display.textContent += "9";
        }
    }
    addBTN.style.opacity = "1";
});

zero.addEventListener('click', () => {
    if (display.textContent.length < 16) {
        if (display.textContent === "0") {
        } else {
            display.textContent += "0";
        }
    }
    addBTN.style.opacity = "1";
});

clear.addEventListener('click', () => {
    if (display.textContent === "0") {
    } else {
        display.textContent = "0";
    }
    addBTN.style.opacity = "1";
});

addBTN.addEventListener('click', () => {
    addBTN.style.opacity = "0.5";
    firstNumber = display.textContent.slice(0);
    operators = "+";
});
