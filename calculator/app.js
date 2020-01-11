const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator')
const equals = document.querySelector('#equals');
const decimal = document.querySelector('#decimal');
const clear = document.querySelector('#clear');
const displayValue = document.querySelector('.number-display');

let numbers = [];
let operator = '';

let firstNumber;
let secondNumber; 

numberButtons.forEach( (button) => {
    button.addEventListener('click', (event) => {
        numbers.push(event.target.id);
        displayValue.textContent = numbers.join('');
    });
})

operatorButtons.forEach( (button) => {
    button.addEventListener('click', (event) => {
        if (!firstNumber) {
            firstNumber = parseInt(displayValue.textContent);
        } else {
            secondNumber = parseInt(displayValue.textContent);
            let result =  operate(firstNumber, secondNumber, operator);
            displayValue.textContent = result;
            firstNumber = result;
        }
        operator = event.target.textContent;
        numbers = [];
    })
})

equals.addEventListener('click', () => {
    secondNumber = parseInt(displayValue.textContent);
    let result =  operate(firstNumber, secondNumber, operator);
    displayValue.textContent = result;
    firstNumber = result;
    numbers = [];
})

clear.addEventListener('click', () => {
    clearData();
})

function clearData() {
    operator = '';
    numbers = [];
    displayValue.textContent = '';
    firstNumber = '';
    secondNumber = ''
}

function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '/':
            if (secondNumber === 0) {
                clearData();
                alert("You can't divide by 0.")
            } else {
                return firstNumber / secondNumber;
            }
        case '*':
            return firstNumber * secondNumber;
        default:
            alert("An error has occurred.");
    }
}

