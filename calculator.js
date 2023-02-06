let outputDisplay = document.querySelector('.output-display');
outputDisplay.textContent = ``;


let numTmp = 0;
numCounter = 0;

let num1 = 0;
let num2 = 0;

let sign = '';

const dig1 = document.querySelector('#dig1');
const dig2 = document.querySelector('#dig2');

const equalsSign = document.querySelector('#equals');
const plusSign = document.querySelector('#plus');
const clearSign = document.querySelector('#clear');

dig1.addEventListener('click', () => {
    outputDisplay.textContent += '1';
    numTmp += '1';
    //numCounter++;
    //if(numCounter > 1) numCounter = 0;

});

dig2.addEventListener('click', () => {
    outputDisplay.textContent += '2';
    numTmp += '2';
    //numCounter++;
    //if(numCounter > 1) numCounter = 0;
});

plusSign.addEventListener('click', () => {
    num1 = parseFloat(numTmp);
    numTmp = 0;
    outputDisplay.textContent += '+';
    sign = '+';   
});


equalsSign.addEventListener('click', () => {
    num2 = parseFloat(numTmp);
    numTmp = 0;
    outputDisplay.textContent = operate(sign, num1, num2);
});

clearSign.addEventListener('click', () => {
    outputDisplay.textContent = '';
    sign = '';
    num1 = 0;
    num2 = 0;
});

const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

const operate = function(operator, a, b) {
    switch(operator) {
        case('+'): {
            return add(a,b);
        }    
        break;

        case('-'): {
            return subtract(a,b);
        }
        break;

        case('*'): {
            return multiply(a,b);
        }
        break;

        case('/'): {
            return divide(a,b);
        }
        break;
    }
}