let outputDisplay = document.querySelector('.output-display');
outputDisplay.textContent = ``;


let numTmp = 0;
let numCounter = 0;

let num1 = 0;
let num2 = 0;

let sign = '';

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

// for(let i = 0; i < 10; i++) {
//     dig[i].addEventListener('click', () => {
//         if(numCounter < 2) {
//             outputDisplay.textContent += `&{i}`;
//             numTmp += `&{i}`;
//         }
// }

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