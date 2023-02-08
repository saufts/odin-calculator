let outputDisplay = document.querySelector('.output-display');
outputDisplay.textContent = ``;

let numTmp = 0;
let numCounter = 0;

let num1 = 0;
let num2 = 0;
let result = 0;

let sign = '';

let dig = [];
let i = 0;

let isCalculated = false;

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
const minusSign = document.querySelector('#minus');
const asteriskSign = document.querySelector('#asterisk');
const divideSign = document.querySelector('#divide');
const clearSign = document.querySelector('#clear');
const comma = document.querySelector('#comma');

const enterDigit = function(digit) {
    if(numCounter < 2 && !isCalculated) {
        outputDisplay.textContent += `${digit}`;
        numTmp += `${digit}`;
    } else if (isCalculated) {
        isCalculated = false;
        result = 0;
        outputDisplay.textContent = `${digit}`;
        numTmp = `${digit}`;
    }   
}

const addComma = function() {
    if(numCounter < 2 && !isCalculated) {
        outputDisplay.textContent += `.`;
        numTmp += `.`;
        comma.disabled = true;

    } else if (isCalculated) {
        isCalculated = false;
        result = 0;
        outputDisplay.textContent = `.`;
        numTmp = `.`;
    }   
}

const enterOperator = function(operator) {
    if(numCounter < 1 && !isCalculated && numTmp !== 0) {
        num1 = parseFloat(numTmp);
        numTmp = 0;
        outputDisplay.textContent += `${operator}`;
        sign = `${operator}`;
        numCounter++; 
        comma.disabled = false;
        
    } else if (isCalculated && numCounter < 1) { //case, after the equals button has been pressed, and the result become first number in the evaluation
        num1 = result;
        outputDisplay.textContent += `${operator}`;
        sign = `${operator}`;
        isCalculated = false;
        numCounter++;
        comma.disabled = false;
    }
}

const initializeDigitButtons = function() {
    dig0.addEventListener('click', () => {
        enterDigit(0);
    });
    
    dig1.addEventListener('click', () => {
        enterDigit(1);
    });
    
    dig2.addEventListener('click', () => {
        enterDigit(2);
    });
    
    dig3.addEventListener('click', () => {
        enterDigit(3);
    });
    
    dig4.addEventListener('click', () => {
        enterDigit(4);
    });
    
    dig5.addEventListener('click', () => {
        enterDigit(5);
    });
    
    dig6.addEventListener('click', () => {
        enterDigit(6);
    });
    
    dig7.addEventListener('click', () => {
        enterDigit(7);
    });
    
    dig8.addEventListener('click', () => {
        enterDigit(8);
    });
    
    dig9.addEventListener('click', () => {
        enterDigit(9);
    });
}

const initializeSymbolButtons = function() {

    plusSign.addEventListener('click', () => {
        enterOperator('+');
    });

    minusSign.addEventListener('click', () => {
        enterOperator('-');
    });

    asteriskSign.addEventListener('click', () => {
        enterOperator('*');
    });

    divideSign.addEventListener('click', () => {
        enterOperator('/');
    });

    comma.addEventListener('click', () => {
        addComma();
    });

}

initializeDigitButtons();
initializeSymbolButtons();

equalsSign.addEventListener('click', () => {
    num2 = parseFloat(numTmp);
    numTmp = 0;
    result = operate(sign, num1, num2);
    if(result === undefined) {
        outputDisplay.textContent = 'huh?';  
    }
    else {
        outputDisplay.textContent = result;
    }
    numCounter = 0;
    isCalculated = true;
    sign = '';
});

clearSign.addEventListener('click', () => {
    outputDisplay.textContent = '';
    sign = '';
    num1 = 0;
    num2 = 0;
    result = 0;
    numCounter = 0;
    numTmp = 0;
    isCalculated = false;
    comma.disabled = false;
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