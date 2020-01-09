console.log("Hello World")

const gridContainer = document.querySelector(".container");

    for (let i = 0; i < 4; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridContainer.appendChild(gridRow);
        for (let i = 0; i < 4; i++) {
            const box = document.createElement('div');
            box.classList.add('box')
            gridRow.appendChild(box);
        }
    }
