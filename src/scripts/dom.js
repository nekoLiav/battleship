export default function dom () {

  const content = document.createElement('div');
  const titlebar = document.createElement('div');
  const title = document.createElement('h1');
  const boardTitleContainer = document.createElement('div');
  const computerBoardTitle = document.createElement('h2');
  const playerBoardTitle = document.createElement('h2');
  const boardContainer= document.createElement('div');
  const playerBoard = document.createElement('div');
  const buttonContainer = document.createElement('div');
  const randomButton = document.createElement('button');
  const computerBoard = document.createElement('div');
  const overlay = document.createElement('div');

  content.id = 'content';
  boardContainer.id = 'boardcontainer'; 
  playerBoard.id = 'playerboard';
  playerBoardTitle.id = 'playerboardtitle';
  playerBoardTitle.textContent = 'PLAYER';
  buttonContainer.id = 'buttoncontainer';
  randomButton.id = 'randombutton';
  randomButton.textContent = 'Random';
  computerBoard.id = 'computerboard';
  computerBoardTitle.id = 'computerboardtitle';
  computerBoardTitle.textContent = 'COMPUTER'
  overlay.id = 'overlay';
  titlebar.id = 'titlebar';
  title.id = 'title';
  title.textContent = 'BATTLESHIP';
  boardTitleContainer.id = 'boardtitlecontainer';

  boardTitleContainer.appendChild(playerBoardTitle);
  boardTitleContainer.appendChild(computerBoardTitle);
  boardContainer.appendChild(playerBoard);
  buttonContainer.appendChild(randomButton);
  boardContainer.appendChild(computerBoard);
  computerBoard.appendChild(overlay);
  titlebar.appendChild(title);
  content.appendChild(titlebar);
  content.appendChild(boardTitleContainer);
  content.appendChild(buttonContainer);
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