let squareSize = 0;
let magicSquare = [];

const magicSquareForm = document.querySelector("#magic-square-width");
magicSquareForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    
    if (magicSquareForm.width.value % 2 === 0) {
        alert("Please enter an odd number");
        return;
    } else if (magicSquareForm.width.value === '1') {
        alert("Please enter an odd number greater than 1")
        return;
    }
    
    while (magicSquare.length) magicSquare.pop();
    squareSize = magicSquareForm.width.value;
    let magicConstant = squareSize * (((squareSize ** 2) + 1) / 2);
    console.log(magicConstant);
    
    for (let i = 0; i < squareSize; i++) {
        magicSquare[i] = [];
        for (let j = 0; j < squareSize; j++) {
            magicSquare[i][j] = 0;
        }
    }
    console.log(magicSquare);
    // console.log(magicSquare[0][0]);
    createGrid(squareSize);
    console.log(Math.floor(magicSquare.length / 2))
    computeSquare(parseInt(squareSize));
    magicSquareForm.reset();
    magicSquareForm.width.placeholder = `Magic Constant = ${magicConstant}`
});

const createGrid = (squareSize) => {
    let grid = document.querySelector("#magic-square-grid");
    while (grid.firstElementChild) grid.removeChild(grid.firstElementChild);
    grid.style.gridTemplateColumns = `repeat(${squareSize}, 1fr)`;
    for (let i = 0; i < squareSize; i++) {
        for (let j = 0; j < squareSize; j++) {
            let cell = document.createElement("button");
            cell.disabled = true;
            cell.innerHTML = "";
            cell.setAttribute(`y`, `${i}`);
            cell.setAttribute(`x`, `${j}`);
            document.querySelector("#magic-square-grid").appendChild(cell);
        }
    }
}

const computeSquare = (squareSize) => {
    console.log(squareSize);
    let currentNumber = 1;
    let initialPosition = Math.floor(magicSquare.length / 2);
    let x = initialPosition, y = 0, previousX, previousY;
    
    // const delayedPrinting = (x, y, currentNumber) => {
    //     document.querySelector(`[x="${x}"][y="${y}"]`).innerHTML = currentNumber;
    // }
    
    
    while (currentNumber <= squareSize * squareSize) {
        magicSquare[y][x] = currentNumber;
        // setTimeout(() => {
        //     console.log(x, y, currentNumber)
        document.querySelector(`[x="${x}"][y="${y}"]`).innerHTML = currentNumber.toString();
        // }, 1000)
        // document.querySelector(`[x="${x}"][y="${y}"]`).innerHTML = currentNumber.toString();
        // setTimeout((x, y, currentNumber) => {
        //     document.querySelector(`[x="${x}"][y="${y}"]`).innerHTML = currentNumber;
        // }, 1000);
        // setTimeout((x, y, currentNumber) => {delayedPrinting(x, y, currentNumber)}, 1000)
        currentNumber++;
        previousX = x;
        previousY = y
        y -= 1;
        x++;
        
        if (y === -1) {
            y = squareSize -1;
        }
        if (x === squareSize) {
            x = 0;
        }
        if (magicSquare[y][x] !== 0) {
            y = previousY + 1;
            x = previousX;

        }
        if (y === -1) {
            y = squareSize - 1;
        }
    }
}