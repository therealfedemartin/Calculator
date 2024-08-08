
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

function operate(numberOne, operator, numberTwo) {
    switch (operator) {
        case "+":
            return add(numberOne, numberTwo);  
        case "-":
            return subtract(numberOne, numberTwo);
        case "*":
            return multiply(numberOne, numberTwo);
        case "/":
            return divide(numberOne, numberTwo);
    }
}

//**** Variables defined  ****

let operators = "";
let secondNumber = 0;
let pressed = "";
let firstNumber = 0;
let toDecimal = false;

//**** BTNS defined ****

const display = document.querySelector("#display");
display.textContent = "0";

const numb = document.querySelectorAll('.numb');

for (const btn of numb) {
    btn.addEventListener('click', () => {
        if (display.textContent.length < 16) {
            if (pressed === "") {
                if (display.textContent === "0" && !toDecimal) {
                    display.textContent = btn.textContent;
                } else {
                    display.textContent += btn.textContent;
                }
            } else {
                pressed = "";
                display.textContent = btn.textContent;
                toDecimal = false;
            }
        }
        addBTN.style.opacity = "1";
        subtractBTN.style.opacity = "1";
        multiplyBTN.style.opacity = "1";
        divideBTN.style.opacity = "1";
    });
}



const zero = document.querySelector(".zero");
zero.addEventListener('click', () => {
    if (display.textContent.length < 16) {
        if (display.textContent === "0" && !toDecimal) {
            } else if (pressed  !== "" && display.textContent !== "0") {
                display.textContent = zero.textContent;
            } else {
                display.textContent += zero.textContent;
            }
    }
    addBTN.style.opacity = "1";
    subtractBTN.style.opacity = "1";
    multiplyBTN.style.opacity = "1";
    divideBTN.style.opacity = "1";
    toDecimal = false;
});

const clear = document.querySelector(".clear");
clear.addEventListener('click', () => {
    if (display.textContent === "0") {
    } else {
        display.textContent = "0";
        firstNumber = 0;
        secondNumber = 0;
        operators = "";
        toDecimal = false;
    }
    addBTN.style.opacity = "1";
    subtractBTN.style.opacity = "1";
    multiplyBTN.style.opacity = "1";
    divideBTN.style.opacity = "1";  
});

const addBTN = document.querySelector(".addBTN");
addBTN.addEventListener('click', () => {
    addBTN.style.opacity = "0.5";
    firstNumber = parseFloat(display.textContent);
    operators = "+";
    pressed = "Algo";
    subtractBTN.style.opacity = "1";
    multiplyBTN.style.opacity = "1";
    divideBTN.style.opacity = "1";
    toDecimal = false;

});

const subtractBTN = document.querySelector(".subtractBTN");
subtractBTN.addEventListener('click', () => {
    subtractBTN.style.opacity = "0.5";
    firstNumber = parseFloat(display.textContent);
    operators = "-";
    pressed = "Algo";
    addBTN.style.opacity = "1";
    multiplyBTN.style.opacity = "1";
    divideBTN.style.opacity = "1";
    toDecimal = false;

});

const multiplyBTN = document.querySelector(".multiplyBTN");
multiplyBTN.addEventListener('click', () => {
    multiplyBTN.style.opacity = "0.5";
    firstNumber = parseFloat(display.textContent);
    operators = "*";
    pressed = "Algo";
    addBTN.style.opacity = "1";
    subtractBTN.style.opacity = "1";
    divideBTN.style.opacity = "1";
    toDecimal = false   ;

});

const divideBTN = document.querySelector(".divideBTN");
divideBTN.addEventListener('click', () => {
    divideBTN.style.opacity = "0.5";
    firstNumber = parseFloat(display.textContent);
    operators = "/";
    pressed = "Algo";
    addBTN.style.opacity = "1";
    subtractBTN.style.opacity = "1";
    multiplyBTN.style.opacity = "1";
    toDecimal = false;

});

const equal = document.querySelector(".equal");
equal.addEventListener('click', () => {
    if (operators === "/" && display.textContent === "0") {
        display.textContent = "∞ UOPS! ∞";
        firstNumber = 0;
        secondNumber = 0;
        operators = "";
        toDecimal = false;
    } else {
        if (operators !== "" ) {
            secondNumber = parseFloat(display.textContent);
            let result = operate(firstNumber, operators, secondNumber);
            display.textContent = result.toFixed(2);
            firstNumber = result;
            secondNumber = 0;
            operators = "";
            toDecimal = false;

        }
    }
});

const percentage = document.querySelector(".percentage");
percentage.addEventListener('click', () => {
    if (display.textContent !== "0") {
        if (display.textContent.length < 6) {
            let divideH = parseFloat(display.textContent) / 100;
            display.textContent = divideH;
        }
    }
});

const sign = document.querySelector(".sign");
sign.addEventListener('click', () => {
    if (display.textContent !== "0") {
        let changeSign = parseFloat(display.textContent) * -1;
        display.textContent = changeSign.toFixed(2);
    }
});

const dot = document.querySelector(".dot");
dot.addEventListener('click', () => {
  if (!display.textContent.includes(".") && pressed === "") {
    display.textContent += dot.textContent;
    toDecimal = true;
  } else if (pressed !== "") {
    display.textContent = "0.";
    toDecimal = true;
    pressed = "";
  }
});