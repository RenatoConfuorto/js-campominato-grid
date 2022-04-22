// ELEMENTI DEL DOM  
const main = document.getElementById('main');
const difficulty = document.getElementById('difficulty');
const actionBtn = document.getElementById('action-btn');

const gridSize = 10;
const cellsNumber = gridSize * gridSize;

const activeCells = [];
//generare la griglia al click del bottone
actionBtn.addEventListener('click', createGrid);

function createGrid(){
  //resettare l'elemento
  main.innerHTML = '';
  //creare il div della griglia
  const grid = document.createElement('div');
  grid.classList.add('container');
  grid.setAttribute('id', 'grid');
  //creare le celle
  createCells(grid, cellsNumber);

  main.append(grid);
}

function createCells(element, number){
  for(let i = 0; i < number; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerHTML = i;

    cell.addEventListener('click', function(){
      this.classList.add('active');
      activeCells.push(cell);

      //controllare se sono finite le celle cliccabili
      checkForWin(activeCells, cellsNumber);
    });

    element.append(cell);
  }
}

function checkForWin(array, number){

  if(array.length === number){
    alert('Hai Vinto');
  }

}