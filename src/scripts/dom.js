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
  const computerOverlay = document.createElement('div');
  const startButton = document.createElement('button');
  const restartButton = document.createElement('button');
  const gameStatusContainer = document.createElement('div');
  const playerStatus = document.createElement('div');
  const computerStatus = document.createElement('div');
  const playerHit = document.createElement('p');
  const playerMiss = document.createElement('p');
  const computerHit = document.createElement('p');
  const computerMiss = document.createElement('p');

  content.id = 'content';
  boardContainer.id = 'boardcontainer'; 
  playerBoard.id = 'playerboard';
  playerBoardTitle.id = 'playerboardtitle';
  playerBoardTitle.textContent = 'PLAYER';
  buttonContainer.id = 'buttoncontainer';
  randomButton.id = 'randombutton';
  randomButton.textContent = 'PLACE SHIPS';
  computerBoard.id = 'computerboard';
  computerBoardTitle.id = 'computerboardtitle';
  computerBoardTitle.textContent = 'COMPUTER'
  computerOverlay.id = 'computeroverlay';
  titlebar.id = 'titlebar';
  title.id = 'title';
  title.textContent = 'BATTLESHIP';
  boardTitleContainer.id = 'boardtitlecontainer';
  startButton.id = 'startbutton';
  startButton.textContent = 'START GAME';
  restartButton.id = 'restartbutton';
  restartButton.textContent = 'RESTART GAME';
  restartButton.style.display = 'none';
  gameStatusContainer.id = "gamestatuscontainer";
  playerStatus.id = 'playerstatus';
  computerStatus.id = 'computerstatus';
  playerHit.id = 'playerhit';
  playerHit.textContent = 'PLAYER BOARD HITS: ' + 0;
  playerMiss.id = 'playermiss';
  playerMiss.textContent = 'PLAYER BOARD MISSES: ' + 0;
  computerHit.id = 'computerhit';
  computerHit.textContent = 'COMPUTER BOARD HITS: ' + 0;
  computerMiss.id = 'computermiss';
  computerMiss.textContent = 'COMPUTER BOARD MISSES: ' + 0;

  playerStatus.appendChild(playerHit);
  playerStatus.appendChild(playerMiss);
  computerStatus.appendChild(computerHit);
  computerStatus.appendChild(computerMiss);
  gameStatusContainer.appendChild(playerStatus);
  gameStatusContainer.appendChild(computerStatus);
  boardTitleContainer.appendChild(playerBoardTitle);
  boardTitleContainer.appendChild(computerBoardTitle);
  boardContainer.appendChild(playerBoard);
  buttonContainer.appendChild(startButton);
  buttonContainer.appendChild(randomButton);
  buttonContainer.appendChild(restartButton);
  boardContainer.appendChild(computerBoard);
  computerBoard.appendChild(computerOverlay);
  titlebar.appendChild(title);
  content.appendChild(titlebar);
  content.appendChild(boardTitleContainer);
  content.appendChild(boardContainer);
  content.appendChild(buttonContainer);
  content.appendChild(gameStatusContainer);

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