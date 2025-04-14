import "./css/style.css";

import "./js/app";

const gridContainer = document.querySelector('.grid-rows');
        
for (let i = 0; i < 4; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');
    
    for (let j = 0; j < 4; j++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        row.appendChild(cell);
    }
    
    gridContainer.appendChild(row);
}
