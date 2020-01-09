console.log("Hello World")

const gridContainer = document.querySelector('.container');
const drawButton = document.querySelector('#drawButton');
const clearButton = document.querySelector('#clearButton');
const normalToggle = document.querySelector('#normal');
const gradientToggle = document.querySelector('#gradient');
const randomToggle = document.querySelector('#random');

//default state
normalToggle.checked = true;
drawGrid(4)

normalToggle.addEventListener('change', () => {
    normalToggle.checked = true;
    gradientToggle.checked = false;
    randomToggle.checked = false;
})

gradientToggle.addEventListener('change', () => {
    gradientToggle.checked = true;
    randomToggle.checked = false;
    normalToggle.checked = false;
})

randomToggle.addEventListener('change', () => {
    normalToggle.checked = false;
    gradientToggle.checked = false;
    randomToggle.checked = true;
})

drawButton.addEventListener('click', () => {
        let input = prompt("How many squares should be in a row?")
        clearGrid();
        drawGrid(input);
    })

clearButton.addEventListener('click', () => {
        clearGrid();
    })


function clearGrid() {
    gridContainer.innerHTML = '';
}

function drawGrid(squares) {
    for (let i = 0; i < squares; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridContainer.appendChild(gridRow);
        for (let i = 0; i < squares; i++) {
            const box = document.createElement('div');
            box.classList.add('box')
            box.addEventListener('mouseover', () => {
                setBehavior(box);
            })
            gridRow.appendChild(box);
        }
    }
}

function setBehavior(box) {
    if (normalToggle.checked) {
        box.classList.add('black')
    } else if (gradientToggle.checked) {
        box.classList.add('black')
        incrementOpacity(box);
    } else if (randomToggle.checked) {
        let color = generateRandomColor();
        box.style.backgroundColor = color;
    }
}

function incrementOpacity(box) {
    if (!box.style.opacity) {
        box.style.opacity = '0.1';
    } else if (box.style.opacity === '1') {
        return null;
    } else {
        box.style.opacity = parseFloat(box.style.opacity) + 0.1;
    }
}

function generateRandomColor() {
    return `rgba(${randomNumber()}, ${randomNumber()}, ${randomNumber()}, 1)`
}

function randomNumber() {
    return Math.floor((Math.random() * 255) + 1);
}
