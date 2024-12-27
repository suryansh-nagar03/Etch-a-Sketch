const draw = document.getElementById("draw");
const erase = document.getElementById("erase");
const adjustPixels = document.getElementById("adjust-pixels");
const reset = document.getElementById("reset"); 
const canvas = document.querySelector(".grid");

let size = 16;
let current = "draw";

function generateGrid(size){
    // clearing the canvas
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    const cellSize = 300/size;

    for(let i=1;i<=size;i++){
        let row = document.createElement("div");
        row.style.display = "flex";
        canvas.appendChild(row);

        for(let j=1;j<=size;j++){
            let cell = document.createElement("div");
            
            cell.style.border = "1px solid grey";
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            cell.style.boxSizing = "border-box";
            cell.classList.add("cell");

            row.appendChild(cell);
        }
    }
    addCellListeners();
}
function clickAdjustPixels(){
    size = parseInt(prompt("Enter the size, which gives the dimensions of the grid (nxn)"));

    if(isNaN(size) || size<=0){
        alert("Enter a valid positive number");
        return;
    }
    if(size>50) size=50;

    generateGrid(size);
}

function resetCanvas(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
}

function drawSketch(){
    current = "draw";
}

function eraseSketch(){
    current = "erase";
}

function addCellListeners(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach(box => {
        box.addEventListener("mouseover", function(e) {
            if(current==="draw"){
                box.style.backgroundColor = "black";
            }
            else if(current==="erase"){
                box.style.backgroundColor = "white";
            }
        });
    });
}

generateGrid(16);

adjustPixels.addEventListener("click", clickAdjustPixels);
draw.addEventListener("click",drawSketch);
erase.addEventListener("click",eraseSketch);
reset.addEventListener("click",resetCanvas);
