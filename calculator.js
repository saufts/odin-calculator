let outputDisplay = document.querySelector('.output-display');
outputDisplay.textContent = ``;


let numTmp = 0;
let numCounter = 0;

let num1 = 0;
let num2 = 0;

let sign = '';

let dig = [];
let i = 0;


const dig0 = document.querySelector('#dig0');
const dig1 = document.querySelector('#dig1');
const dig2 = document.querySelector('#dig2');
const dig3 = document.querySelector('#dig3');
const dig4 = document.querySelector('#dig4');
const dig5 = document.querySelector('#dig5');
const dig6 = document.querySelector('#dig6');
const dig7 = document.querySelector('#dig7');
const dig8 = document.querySelector('#dig8');
const dig9 = document.querySelector('#dig9');


const equalsSign = document.querySelector('#equals');
const plusSign = document.querySelector('#plus');
const clearSign = document.querySelector('#clear');
const asteriskSign = document.querySelector('#asterisk');

const initializeDigitButtons = function() {
    dig0.addEventListener('click', () => {
        if(numCounter < 2) {
            outputDisplay.textContent += '0';
            numTmp += '0';
        }
    });
    
    dig1.addEventListener('click', () => {
        if(numCounter < 2) {
            outputDisplay.textContent += '1';
            numTmp += '1';
        }
    });
    
    dig2.addEventListener('click', () => {
        if(numCounter < 2) {
            outputDisplay.textContent += '2';
            numTmp += '2';
        }
    });
    
    dig3.addEventListener('click', () => {
        if(numCounter < 2) {
            outputDisplay.textContent += '3';
            numTmp += '3';
        }
    });
    
    dig4.addEventListener('click', () => {
        if(numCounter < 2) {
            outputDisplay.textContent += '4';
            numTmp += '4';
        }
    });
    
    dig5.addEventListener('click', () => {
        if(numCounter < 2) {
            outputDisplay.textContent += '5';
            numTmp += '5';
        }
    });
    
    dig6.addEventListener('click', () => {
        if(numCounter < 2) {
            outputDisplay.textContent += '6';
            numTmp += '6';
        }
    });
    
    dig7.addEventListener('click', () => {
        if(numCounter < 2) {
            outputDisplay.textContent += '7';
            numTmp += '7';
        }
    });
    
    dig8.addEventListener('click', () => {
        if(numCounter < 2) {
            outputDisplay.textContent += '8';
            numTmp += '8';
        }
    });
    
    dig9.addEventListener('click', () => {
        if(numCounter < 2) {
            outputDisplay.textContent += '9';
            numTmp += '9';
        }
    });
}

initializeDigitButtons();

plusSign.addEventListener('click', () => {
    if(numCounter === 0) {
        num1 = parseFloat(numTmp);
        numTmp = 0;
        outputDisplay.textContent += '+';
        sign = '+';
        numCounter++; 
    }  
});

asteriskSign.addEventListener('click', () => {
    num1 = parseFloat(numTmp);
    numTmp = 0;
    outputDisplay.textContent += '*';
    sign = '*'; 
    numCounter++;  
});


equalsSign.addEventListener('click', () => {
    num2 = parseFloat(numTmp);
    numTmp = 0;
    outputDisplay.textContent = operate(sign, num1, num2);
    numCounter = 0;
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