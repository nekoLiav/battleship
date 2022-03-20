export default function dom () {

  const content = document.createElement('div');
  const boardContainer= document.createElement('div');
  const playerBoard = document.createElement('div');
  const buttonContainer = document.createElement('div');
  const randomButton = document.createElement('button');
  const computerBoard = document.createElement('div');

  content.id = 'content';
  boardContainer.id = 'boardcontainer'; 
  playerBoard.id = 'playerboard';
  buttonContainer.id = 'buttoncontainer';
  randomButton.id = 'randombutton';
  randomButton.textContent = 'Random';
  computerBoard.id = 'computerboard';

  boardContainer.appendChild(playerBoard);
  buttonContainer.appendChild(randomButton);
  boardContainer.appendChild(buttonContainer);
  boardContainer.appendChild(computerBoard);
  content.appendChild(boardContainer);

  for (let i = 0, x = 0, y = 0; i < 100; i++, x++) {
    if (x === 10) {
      x = 0;
      y += 1;
    }
    const playerSquare = document.createElement('div');
    playerSquare.dataset.i = i;
    playerSquare.dataset.x = x;
    playerSquare.dataset.y = y;
    playerSquare.className = 'playersquare';
    playerBoard.appendChild(playerSquare);
  }

  for (let i = 0, x = 0, y = 0; i < 100; i++, x++) {
    if (x === 10) {
      x = 0;
      y += 1;
    }
    const computerSquare = document.createElement('div');
    computerSquare.dataset.i = i;
    computerSquare.dataset.x = x;
    computerSquare.dataset.y = y;
    computerSquare.className = 'computersquare';
    computerBoard.appendChild(computerSquare);
  }

  document.body.appendChild(content);
  
}