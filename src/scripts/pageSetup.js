import random from "./random";

export default function pageSetup () {

  // content container
  const content = document.createElement('div');
  content.id = 'content';
  document.body.appendChild(content);

  // board container
  const boardContainer= document.createElement('div');
  boardContainer.id = 'boardcontainer'; 
  content.appendChild(boardContainer);

  // player board
  const playerBoard = document.createElement('div');
  playerBoard.id = 'playerboard';
  
  // populate player board with squares and meta information
  for (let i = 0, x = 0, y = 0; i < 100; i++, x++) {
    if (x === 10) {
      x = 0;
      y += 1;
    }
    const playerSquare = document.createElement('div');
    // matches boardArray index
    playerSquare.dataset.i = i;
    // matches boardArray x coordinate
    playerSquare.dataset.x = x;
    // matches boardArray y coordinate
    playerSquare.dataset.y = y;
    playerSquare.className = 'playersquare';
    playerBoard.appendChild(playerSquare);
  }

  boardContainer.appendChild(playerBoard);

  const buttonContainer = document.createElement('div');
  buttonContainer.id = 'buttoncontainer';
 boardContainer.appendChild(buttonContainer);

  const randomButton = document.createElement('button');
  randomButton.id = 'randombutton';
  randomButton.textContent = 'Random';
  buttonContainer.appendChild(randomButton);

  // identical to player board setup
  const computerBoard = document.createElement('div');
  computerBoard.id = 'computerboard';

  for (let i = 0, x = 0, y = 0; i < 100; i++, x++) {
    if (x === 10) {
      x = 0;
      y += 1;
    }
    const computerSquare = document.createElement('div');
    computerSquare.dataset.x = x;
    computerSquare.dataset.y = y;
    computerSquare.className = 'computersquare';
    computerBoard.appendChild(computerSquare);
  }
  
  boardContainer.appendChild(computerBoard);
  
}