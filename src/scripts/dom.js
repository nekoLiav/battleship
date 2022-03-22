import players from './players';
import reset from './reset';
import ai from './ai';

export default function dom() {
  const content = document.createElement('div');
  const titlebar = document.createElement('div');
  const main = document.createElement('div');
  const boardTitleContainer = document.createElement('div');
  const boardContainer = document.createElement('div');
  const playerBoard = document.createElement('div');
  const computerBoard = document.createElement('div');
  const buttonContainer = document.createElement('div');
  const gameStatusContainer = document.createElement('div');
  const playerStatus = document.createElement('div');
  const computerStatus = document.createElement('div');
  const modal = document.createElement('div');
  const overlay = document.createElement('div');
  const shipContainer = document.createElement('div');
  const carrierContainer = document.createElement('div');
  const battleshipContainer = document.createElement('div');
  const destroyerContainer = document.createElement('div');
  const submarineContainer = document.createElement('div');
  const patrolBoatContainer = document.createElement('div');
  const randomButton = document.createElement('button');
  const startButton = document.createElement('button');
  const resetButton = document.createElement('button');
  const playAgainButton = document.createElement('button');
  const title = document.createElement('p');
  const playerBoardTitle = document.createElement('p');
  const computerBoardTitle = document.createElement('p');
  const playerShipsSunk = document.createElement('p');
  const playerHit = document.createElement('p');
  const playerMiss = document.createElement('p');
  const computerShipsSunk = document.createElement('p');
  const computerHit = document.createElement('p');
  const computerMiss = document.createElement('p');
  const modalHeader = document.createElement('p');
  const modalText = document.createElement('p');

  content.id = 'content';
  main.id = 'main';
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
  resetButton.id = 'resetbutton';
  resetButton.textContent = 'RESET GAME';
  resetButton.style.display = 'none';
  gameStatusContainer.id = 'gamestatuscontainer';
  playerStatus.id = 'playerstatus';
  computerStatus.id = 'computerstatus';
  playerShipsSunk.id = 'playershipssunk';
  playerHit.id = 'playerhit';
  playerMiss.id = 'playermiss';
  computerShipsSunk.id = 'computershipssunk';
  computerHit.id = 'computerhit';
  computerMiss.id = 'computermiss';
  modal.id = 'modal';
  playAgainButton.id = 'playagainbutton';
  overlay.id = 'overlay';
  overlay.style.display = 'none';
  modalHeader.id = 'modalheader';
  modalText.id = 'modaltext';
  modalText.textContent = 'Would you like to play again?';
  playAgainButton.textContent = 'PLAY AGAIN';
  shipContainer.id = 'shipcontainer';
  carrierContainer.id = 'carrier';
  carrierContainer.className = 'ship';
  battleshipContainer.id = 'battleship';
  battleshipContainer.className = 'ship';
  destroyerContainer.id = 'destroyer';
  destroyerContainer.className = 'ship';
  submarineContainer.id = 'submarine';
  submarineContainer.className = 'ship';
  patrolBoatContainer.id = 'patrolboat';
  patrolBoatContainer.className = 'ship';

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
    shipContainer,
    playerBoard,
    computerBoard,
    overlay,
  );
  buttonContainer.append(
    startButton,
    resetButton,
    randomButton,
  );
  titlebar.append(
    title,
  );
  modal.append(
    modalHeader,
    modalText,
    playAgainButton,
  );
  overlay.append(
    modal,
  );
  shipContainer.append(
    carrierContainer,
    battleshipContainer,
    destroyerContainer,
    submarineContainer,
    patrolBoatContainer,
  );
  main.append(
    boardTitleContainer,
    boardContainer,
    gameStatusContainer,
    buttonContainer,
  );
  content.append(
    titlebar,
    main,
  );

  for (let i = 0; i < 5; i += 1) {
    const shipSquare = document.createElement('div');
    shipSquare.className = 'shipsquare';
    carrierContainer.append(shipSquare);
  }

  for (let i = 0; i < 4; i += 1) {
    const shipSquare = document.createElement('div');
    shipSquare.className = 'shipsquare';
    battleshipContainer.append(shipSquare);
  }

  for (let i = 0; i < 3; i += 1) {
    const shipSquare = document.createElement('div');
    shipSquare.className = 'shipsquare';
    destroyerContainer.append(shipSquare);
  }

  for (let i = 0; i < 3; i += 1) {
    const shipSquare = document.createElement('div');
    shipSquare.className = 'shipsquare';
    submarineContainer.append(shipSquare);
  }

  for (let i = 0; i < 2; i += 1) {
    const shipSquare = document.createElement('div');
    shipSquare.className = 'shipsquare';
    patrolBoatContainer.append(shipSquare);
  }

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
    if (e.target.parentNode.id === 'computerboard') {
      const dataIndex = e.target.getAttribute('data-i');
      if (players.c.boardArray[dataIndex][2] === 0) {
        players.c.receiveAttack(dataIndex);
        ai();
        const computerSquares = document.getElementsByClassName('computersquare');
        if (players.c.boardArray[dataIndex].length > 3) {
          computerSquares[dataIndex].classList.add('hit');
        } else {
          computerSquares[dataIndex].classList.add('miss');
        }
      }
    }
    computerShipsSunk.textContent = `COMPUTER SHIPS SUNK: ${players.c.sunkShips()}`;
    computerHit.textContent = `COMPUTER BOARD HITS: ${players.c.hitCount()}`;
    computerMiss.textContent = `COMPUTER BOARD MISSES: ${players.c.missCount()}`;
  });

  shipContainer.addEventListener('click', (e) => {
    if (e.target.className === 'shipsquare') {
      const shipSelection = e.target.parentNode;
      carrierContainer.style.backgroundColor = '#555555';
      battleshipContainer.style.backgroundColor = '#555555';
      destroyerContainer.style.backgroundColor = '#555555';
      submarineContainer.style.backgroundColor = '#555555';
      patrolBoatContainer.style.backgroundColor = '#555555';
      shipSelection.style.backgroundColor = '#999999';
    }
  });

  buttonContainer.addEventListener('click', (e) => {
    if (e.target.id === 'startbutton') {
      shipContainer.style.display = 'none';
      computerBoard.style.display = 'flex';
      computerBoardTitle.style.display = 'block';
      gameStatusContainer.style.display = 'flex';
      startButton.style.display = 'none';
      randomButton.style.display = 'none';
      resetButton.style.display = 'block';
    } else if (e.target.id === 'resetbutton' || e.target.id === 'playAgainButton') {
      reset('partial');
      shipContainer.style.display = 'flex';
      computerBoard.style.display = 'none';
      computerBoardTitle.style.display = 'none';
      gameStatusContainer.style.display = 'none';
      startButton.style.display = 'block';
      randomButton.style.display = 'block';
      resetButton.style.display = 'none';
    } else if (e.target.id === 'randombutton') {
      reset('full');
    }
  });
}
