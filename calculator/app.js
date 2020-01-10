const numberButtons = document.querySelectorAll('.number');
const numberDisplay = document.querySelector('.number-display');

let numbers = [];


numberButtons.forEach( (button) => {
    button.addEventListener('click', (event) => {
        numbers.push(event.target.id);
        numberDisplay.textContent = numbers.join('');
    });
})
