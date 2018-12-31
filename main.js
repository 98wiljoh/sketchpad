let container = document.querySelector('.container');

function createGrid(rows) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let width = container.width / rows;

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= rows; j++) {
            let div = document.createElement('div');
            div.style.width = width - 2;
            div.style.height = width - 2;
            div.style.gridColumnStart = j;
            div.style.gridRowStart = i;

            div.addEventListener('mouseover', e => {
                div.classList.add('color');
            });

            container.appendChild(div);
        }
    }
}

document.querySelector('#clearButton').addEventListener('click', e => {
    container.childNodes.forEach(child => {
        child.classList.remove('color');
    });
});

document.querySelector('#newGridButton').addEventListener('click', e => {
    let rows = prompt("Input amount of rows.");
    if (Number(rows)) {
        createGrid(Number(rows));
    } else {
        createGrid(10);
    }
    
});


createGrid(16);

