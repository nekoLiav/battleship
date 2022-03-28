import playerAttack from './playerAttack';
import playAgain from './playAgain';
import startGame from './startGame';
import switchDirection from './switchDirection';
import placeShip from './placeShip';

export default function createUI() {
  const content = document.createElement('div');
  const titlebar = document.createElement('div');
  const main = document.createElement('div');
  const playerInfoContainer = document.createElement('div');
  const playerInfo = document.createElement('div');
  const computerInfo = document.createElement('div');
  const boardContainer = document.createElement('div');
  const playerBoard = document.createElement('div');
  const computerBoard = document.createElement('div');
  const playerStatus = document.createElement('div');
  const computerStatus = document.createElement('div');
  const modal = document.createElement('div');
  const overlay = document.createElement('div');
  const carrier = document.createElement('div');
  const battleship = document.createElement('div');
  const destroyer = document.createElement('div');
  const submarine = document.createElement('div');
  const patrolboat = document.createElement('div');
  const shipContainer = document.createElement('div');
  const ships = document.createElement('div');
  const buttons = document.createElement('div');
  const startButton = document.createElement('button');
  const directionButton = document.createElement('button');
  const playAgainButton = document.createElement('button');
  const title = document.createElement('p');
  const playerTitle = document.createElement('p');
  const playerStatusText = document.createElement('p');
  const computerTitle = document.createElement('p');
  const computerStatusText = document.createElement('p');
  const modalHeader = document.createElement('p');
  const modalText = document.createElement('p');

  for (let n = 0; n < 5; n += 1) {
    const shipSquare = document.createElement('div');
    shipSquare.className = 'ship-square';
    carrier.append(shipSquare);
  }

  for (let n = 0; n < 4; n += 1) {
    const shipSquare = document.createElement('div');
    shipSquare.className = 'ship-square';
    battleship.append(shipSquare);
  }

  for (let n = 0; n < 3; n += 1) {
    const shipSquare = document.createElement('div');
    shipSquare.className = 'ship-square';
    destroyer.append(shipSquare);
  }

  for (let n = 0; n < 3; n += 1) {
    const shipSquare = document.createElement('div');
    shipSquare.className = 'ship-square';
    submarine.append(shipSquare);
  }

  for (let n = 0; n < 2; n += 1) {
    const shipSquare = document.createElement('div');
    shipSquare.className = 'ship-square';
    patrolboat.append(shipSquare);
  }

  for (let i = 0, x = 0, y = 0; i < 100; i += 1, x += 1) {
    if (x === 10) {
      x = 0;
      y += 1;
    }
    const playerSquare = document.createElement('div');
    playerSquare.className = 'player-square';
    playerSquare.addEventListener('mouseenter', placeShip);
    playerSquare.addEventListener('mouseleave', placeShip);
    playerSquare.addEventListener('click', placeShip);
    playerSquare.dataset.i = i;
    playerSquare.dataset.x = x;
    playerSquare.dataset.y = y;
    playerBoard.append(playerSquare);
    const computerSquare = document.createElement('div');
    computerSquare.className = 'computer-square';
    computerSquare.dataset.i = i;
    computerSquare.dataset.x = x;
    computerSquare.dataset.y = y;
    computerBoard.append(computerSquare);
  }

  startButton.addEventListener('click', startGame);
  directionButton.addEventListener('click', switchDirection);
  playAgainButton.addEventListener('click', playAgain);
  ships.addEventListener('click', placeShip);
  computerBoard.addEventListener('click', playerAttack);

  titlebar.id = 'title-bar';
  title.id = 'title';
  title.textContent = 'Battleship';
  content.id = 'content';
  main.id = 'main';
  playerInfoContainer.id = 'player-info-container';
  playerInfo.id = 'player-info';
  computerInfo.id = 'computer-info';
  playerTitle.id = 'player-title';
  playerTitle.textContent = 'Player';
  playerStatus.id = 'player-status';
  playerStatusText.id = 'player-status-text';
  playerStatusText.textContent = 'Awaiting ship placement...';
  computerTitle.id = 'computer-title';
  computerTitle.textContent = 'Computer';
  computerStatus.id = 'computer-status';
  computerStatusText.id = 'computer-status-text';
  boardContainer.id = 'board-container';
  shipContainer.id = 'ship-container';
  playerBoard.id = 'player-board';
  computerBoard.id = 'computer-board';
  overlay.id = 'overlay';
  modal.id = 'modal';
  modalHeader.id = 'modal-header';
  modalText.id = 'modal-text';
  modalText.textContent = 'Would you like to play again?';
  playAgainButton.id = 'play-again-button';
  playAgainButton.textContent = 'Play Again';
  buttons.id = 'buttons';
  directionButton.id = 'direction-button';
  directionButton.textContent = 'Switch Direction';
  startButton.id = 'start-button';
  startButton.textContent = 'Start Game';
  ships.id = 'ships';
  carrier.id = 'carrier';
  carrier.classList.add('ship', 'horizontal');
  battleship.id = 'battleship';
  battleship.classList.add('ship', 'horizontal');
  destroyer.id = 'destroyer';
  destroyer.classList.add('ship', 'horizontal');
  submarine.id = 'submarine';
  submarine.classList.add('ship', 'horizontal');
  patrolboat.id = 'patrolboat';
  patrolboat.classList.add('ship', 'horizontal');

  ships.append(carrier, battleship, destroyer, submarine, patrolboat);
  buttons.append(directionButton, startButton);
  shipContainer.append(ships, buttons);
  modal.append(modalHeader, modalText, playAgainButton);
  overlay.append(modal);
  boardContainer.append(shipContainer, playerBoard, computerBoard, overlay);
  playerStatus.append(playerStatusText);
  computerStatus.append(computerStatusText);
  playerInfo.append(playerTitle, playerStatus);
  computerInfo.append(computerTitle, computerStatus);
  playerInfoContainer.append(playerInfo, computerInfo);
  main.append(playerInfoContainer, boardContainer);
  content.append(titlebar, main);
  titlebar.append(title);
  document.body.append(content);
}
