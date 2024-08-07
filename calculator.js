
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

//**** DEFINO VARIABLES ****

let operators = "";
let secondNumber = "";
let pressed = "";
let firstNumber = "";

//**** DEFINO LOS BOTONES ****

const display = document.querySelector("#display");
display.textContent = "0";

const numb = document.querySelectorAll('.numb');
for (const btn of numb) {
    btn.addEventListener('click', () => {
        if (display.textContent.length < 16) {
            if (pressed === "") {
                if (display.textContent === "0") {
                    display.textContent = btn.textContent;
                } else {
                    display.textContent += btn.textContent;
                }
            } else {
                display.textContent = "";
                pressed = "";
                display.textContent = btn.textContent;
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
        if (display.textContent === "0") {
            } else if (pressed  != "" && display.textContent != "0") {
                display.textContent = zero.textContent;
            } else {
                display.textContent += zero.textContent;
            }
    }
    addBTN.style.opacity = "1";
});

const clear = document.querySelector(".clear");
clear.addEventListener('click', () => {
    if (display.textContent === "0") {
    } else {
        display.textContent = "0";
        firstNumber = "";
        secondNumber = "";
        operators = "";
    }
    addBTN.style.opacity = "1";
    subtractBTN.style.opacity = "1";
    multiplyBTN.style.opacity = "1";
    divideBTN.style.opacity = "1";
});

const addBTN = document.querySelector(".addBTN");
addBTN.addEventListener('click', () => {
    addBTN.style.opacity = "0.5";
    firstNumber = Number(display.textContent);
    operators = "+";
    pressed = "Algo";
    
    subtractBTN.style.opacity = "1";
    multiplyBTN.style.opacity = "1";
    divideBTN.style.opacity = "1";
});

const subtractBTN = document.querySelector(".subtractBTN");
subtractBTN.addEventListener('click', () => {
    subtractBTN.style.opacity = "0.5";
    firstNumber = Number(display.textContent);
    operators = "-";
    pressed = "Algo";
    addBTN.style.opacity = "1";
    multiplyBTN.style.opacity = "1";
    divideBTN.style.opacity = "1";
});

const multiplyBTN = document.querySelector(".multiplyBTN");
multiplyBTN.addEventListener('click', () => {
    multiplyBTN.style.opacity = "0.5";
    firstNumber = Number(display.textContent);
    operators = "*";
    pressed = "Algo";
    addBTN.style.opacity = "1";
    subtractBTN.style.opacity = "1";
    divideBTN.style.opacity = "1";
});

const divideBTN = document.querySelector(".divideBTN");
divideBTN.addEventListener('click', () => {
    divideBTN.style.opacity = "0.5";
    firstNumber = Number(display.textContent);
    operators = "/";
    pressed = "Algo";
    addBTN.style.opacity = "1";
    subtractBTN.style.opacity = "1";
    multiplyBTN.style.opacity = "1";
});

const equal = document.querySelector(".equal");
equal.addEventListener('click', () => {
    if (operators === "/" && display.textContent === "0") {
        display.textContent = "∞ UOPS! ∞"
        firstNumber = "";
        secondNumber = "";
        operators = "";
    } else {
        if (operators != "" ) {
            secondNumber = Number(display.textContent);
            let result = operate(firstNumber, operators, secondNumber);
            if ((result % 1) != 0) {
                let withDecimal = Number(result).toFixed(2)
                display.textContent = withDecimal;
            } else {
                display.textContent = result;
            }
            
            firstNumber = "";
            secondNumber = "";
            operators = "";
        }
    }
});

const percentage = document.querySelector(".percentage");
percentage.addEventListener('click', () => {
    if (display.textContent != "0") {
        if (display.textContent.length < 6) {
            let toDecimal = Number(display.textContent) / 100;
            display.textContent = toDecimal;
        }
    }
});

const sign = document.querySelector(".sign");
sign.addEventListener('click', () => {
    if (display.textContent != "0") {
        let toDecimal = Number(display.textContent) * -1;
        display.textContent = toDecimal;
    }
});