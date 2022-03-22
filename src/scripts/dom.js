import players from './players';
import reset from './reset';
import ai from './ai';

export default function dom() {
  const content = document.createElement('div');
  const titlebar = document.createElement('div');
  const title = document.createElement('h1');
  const boardTitleContainer = document.createElement('div');
  const computerBoardTitle = document.createElement('h2');
  const playerBoardTitle = document.createElement('h2');
  const boardContainer = document.createElement('div');
  const playerBoard = document.createElement('div');
  const buttonContainer = document.createElement('div');
  const randomButton = document.createElement('button');
  const computerBoard = document.createElement('div');
  const startButton = document.createElement('button');
  const resetButton = document.createElement('button');
  const gameStatusContainer = document.createElement('div');
  const playerStatus = document.createElement('div');
  const computerStatus = document.createElement('div');
  const playerShipsSunk = document.createElement('p');
  const playerHit = document.createElement('p');
  const playerMiss = document.createElement('p');
  const computerShipsSunk = document.createElement('p');
  const computerHit = document.createElement('p');
  const computerMiss = document.createElement('p');
  const endGameModal = document.createElement('div');
  const endGameModalHeader = document.createElement('h2');
  const endGameModalText = document.createElement('p');
  const playAgainButton = document.createElement('button');
  const overlay = document.createElement('div');

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
  computerBoardTitle.textContent = 'COMPUTER';
  titlebar.id = 'titlebar';
  title.id = 'title';
  title.textContent = 'BATTLESHIP';
  boardTitleContainer.id = 'boardtitlecontainer';
  startButton.id = 'startbutton';
  startButton.textContent = 'START GAME';
  resetButton.id = 'restartbutton';
  resetButton.textContent = 'RESTART GAME';
  resetButton.style.display = 'none';
  gameStatusContainer.id = 'gamestatuscontainer';
  playerStatus.id = 'playerstatus';
  computerStatus.id = 'computerstatus';
  playerHit.id = 'playerhit';
  playerHit.textContent = 'PLAYER BOARD HITS: 0';
  playerMiss.id = 'playermiss';
  playerMiss.textContent = 'PLAYER BOARD MISSES: 0';
  computerHit.id = 'computerhit';
  computerHit.textContent = 'COMPUTER BOARD HITS: 0';
  computerMiss.id = 'computermiss';
  computerMiss.textContent = 'COMPUTER BOARD MISSES: 0';
  endGameModal.id = 'endgamemodal';
  playAgainButton.id = 'playagainbutton';
  overlay.id = 'overlay';
  overlay.style.display = 'none';
  endGameModalHeader.id = 'endgamemodalheader';
  endGameModalText.id = 'endgamemodaltext';
  endGameModalText.textContent = 'Would you like to play again?';
  playAgainButton.textContent = 'PLAY AGAIN';
  playerShipsSunk.id = 'playershipssunk';
  playerShipsSunk.textContent = 'PLAYER SHIPS SUNK: 0';
  computerShipsSunk.id = 'computershipssunk';
  computerShipsSunk.textContent = 'COMPUTER SHIPS SUNK: 0';

  playerStatus.append(
    playerShipsSunk,
    playerHit,
    playerMiss,
  );
  computerStatus.append(
    computerShipsSunk,
    computerHit,
    computerMiss,
  );
  gameStatusContainer.append(
    playerStatus,
    computerStatus,
  );
  boardTitleContainer.append(
    playerBoardTitle,
    computerBoardTitle,
  );
  boardContainer.append(
    playerBoard,
    computerBoard,
  );
  buttonContainer.append(
    startButton,
    resetButton,
    randomButton,
  );
  titlebar.append(
    title,
  );
  endGameModal.append(
    endGameModalHeader,
    endGameModalText,
    playAgainButton,
  );
  overlay.append(
    endGameModal,
  );
  content.append(
    titlebar,
    boardTitleContainer,
    boardContainer,
    buttonContainer,
    gameStatusContainer,
    overlay,
  );

  for (let i = 0, x = 0, y = 0; i < 100; i += 1, x += 1) {
    if (x === 10) {
      x = 0;
      y += 1;
    }
    const playerSquare = document.createElement('div');
    const computerSquare = document.createElement('div');
    playerSquare.dataset.i = i;
    computerSquare.dataset.i = i;
    playerSquare.dataset.x = x;
    computerSquare.dataset.x = x;
    playerSquare.dataset.y = y;
    computerSquare.dataset.y = y;
    playerSquare.className = 'playersquare';
    computerSquare.className = 'computersquare';
    playerBoard.append(playerSquare);
    computerBoard.append(computerSquare);
  }

  document.body.append(content);

  boardContainer.addEventListener('click', (e) => {
    const i = e.target.getAttribute('data-i');
    if (e.target.parentNode.id === 'computerboard') {
      if (players.c.boardArray[i][2] === 0) {
        players.c.receiveAttack(i);
        ai();
        const computerSquares = document.getElementsByClassName('computersquare');
        if (players.c.boardArray[i].length > 3) {
          computerSquares[i].classList.add('hit');
        } else {
          computerSquares[i].classList.add('miss');
        }
      }
    }
    computerShipsSunk.textContent = `COMPUTER SHIPS SUNK: ${players.c.sunkShips()}`;
    computerHit.textContent = `COMPUTER BOARD HITS: ${players.c.hitCount()}`;
    computerMiss.textContent = `COMPUTER BOARD MISSES: ${players.c.missCount()}`;
  });

  let resetCheck = 0;

  startButton.addEventListener('click', () => {
    if (resetCheck === 1) {
      playerStatus.style.display = 'block';
      computerBoard.style.display = 'flex';
      computerBoardTitle.style.display = 'block';
      computerStatus.style.display = 'block';
      startButton.style.display = 'none';
      randomButton.style.display = 'none';
      resetButton.style.display = 'block';
    } else {
      alert('You must place your ships before you start the game!');
    }
  });

  resetButton.addEventListener('click', () => {
    reset();
    resetCheck = 0;
    playerStatus.style.display = 'none';
    computerBoard.style.display = 'none';
    computerBoardTitle.style.display = 'none';
    computerStatus.style.display = 'none';
    startButton.style.display = 'block';
    randomButton.style.display = 'block';
    resetButton.style.display = 'none';
  });

  randomButton.addEventListener('click', () => {
    reset(true);
    resetCheck = 1;
  });

  playAgainButton.addEventListener('click', () => {
    reset();
    resetCheck = 1;
    playerStatus.style.display = 'none';
    computerBoard.style.display = 'none';
    computerBoardTitle.style.display = 'none';
    computerStatus.style.display = 'none';
    overlay.style.display = 'none';
    startButton.style.display = 'block';
    randomButton.style.display = 'block';
    resetButton.style.display = 'none';
  });
}
