import SelfLogo from '../../images/HeartLogoNoBkg.svg';
import OdinLogo from '../../images/OdinLogo.svg';
import playerAttack from './playerAttack';
import playAgain from './playAgain';
import startGame from './startGame';
import switchDirection from './switchDirection';
import placeShip from './placeShip';

export default function createUI() {
  const content = document.createElement('div');
  const header = document.createElement('div');
  const headerText = document.createElement('p');
  const main = document.createElement('div');
  const playerInfo = document.createElement('div');
  const playerName = document.createElement('p');
  const playerStatus = document.createElement('p');
  const computerInfo = document.createElement('div');
  const computerName = document.createElement('p');
  const computerStatus = document.createElement('p');
  const boardContainer = document.createElement('div');
  const shipContainer = document.createElement('div');
  const ships = document.createElement('div');
  const carrier = document.createElement('div');
  const battleship = document.createElement('div');
  const destroyer = document.createElement('div');
  const submarine = document.createElement('div');
  const patrolboat = document.createElement('div');
  const playerBoard = document.createElement('div');
  const computerBoard = document.createElement('div');
  const buttons = document.createElement('div');
  const startButton = document.createElement('button');
  const directionButton = document.createElement('button');
  const overlay = document.createElement('div');
  const modal = document.createElement('div');
  const modalHeader = document.createElement('p');
  const modalText = document.createElement('p');
  const playAgainButton = document.createElement('button');
  const footer = document.createElement('div');
  const footerSelf = document.createElement('div');
  const footerSelfText = document.createElement('p');
  const footerSelfLogo = document.createElement('img');
  const footerOther = document.createElement('div');
  const footerOdinLogoUrl = document.createElement('a');
  const footerOdinLogoImg = document.createElement('img');

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
    playerSquare.addEventListener('mouseenter', placeShip);
    playerSquare.addEventListener('mouseleave', placeShip);
    playerSquare.className = 'player-square';
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
  playerBoard.addEventListener('click', placeShip);
  computerBoard.addEventListener('click', playerAttack);

  header.id = 'header';
  headerText.id = 'header-text';
  headerText.textContent = 'Battleship';
  content.id = 'content';
  main.id = 'main';
  playerInfo.id = 'player-info';
  computerInfo.id = 'computer-info';
  playerName.id = 'player-name';
  playerName.textContent = 'Player';
  playerStatus.id = 'player-status';
  playerStatus.textContent = 'Awaiting ship placement...';
  computerName.id = 'computer-name';
  computerName.textContent = 'Computer';
  computerStatus.id = 'computer-status';
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
  footer.id = 'footer';
  footerSelf.id = 'footer-self';
  footerSelfLogo.id = 'footer-self-logo';
  footerSelfLogo.src = SelfLogo;
  footerSelfText.id = 'footer-self-text';
  footerSelfText.textContent = 'Created by Liav';
  footerOdinLogoImg.src = OdinLogo;
  footerOdinLogoUrl.href = 'https://www.theodinproject.com/';
  footerOther.id = 'footer-other';

  modal.append(modalHeader, modalText, playAgainButton);
  overlay.append(modal);
  ships.append(carrier, battleship, destroyer, submarine, patrolboat);
  shipContainer.append(ships);
  buttons.append(directionButton, startButton);
  playerInfo.append(playerName, playerStatus);
  computerInfo.append(computerName, computerStatus);
  boardContainer.append(
    overlay,
    shipContainer,
    buttons,
    playerInfo,
    computerInfo,
    playerBoard,
    computerBoard
  );
  footerSelf.append(footerSelfLogo, footerSelfText);
  footerOdinLogoUrl.append(footerOdinLogoImg);
  footerOther.append(footerOdinLogoUrl);
  footer.append(footerSelf, footerOther);
  main.append(boardContainer);
  header.append(headerText);
  content.append(header, main, footer);
  document.body.append(content);
}
