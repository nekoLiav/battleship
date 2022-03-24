/* eslint-disable no-param-reassign */
import players from './players';
import reset from './reset';
import ai from './ai';
import shipPlacement from './shipPlacement';

export default function dom() {
  const content = document.createElement('div');
  const titlebar = document.createElement('div');
  const main = document.createElement('div');
  const boardTitleContainer = document.createElement('div');
  const boardContainer = document.createElement('div');
  const playerBoard = document.createElement('div');
  const computerBoard = document.createElement('div');
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
  const shipContainerInfo = document.createElement('div');
  const shipButtons = document.createElement('div');
  const startButton = document.createElement('button');
  const resetButton = document.createElement('button');
  const playAgainButton = document.createElement('button');
  const orientationButton = document.createElement('button');
  const title = document.createElement('p');
  const playerBoardTitle = document.createElement('p');
  const computerBoardTitle = document.createElement('p');
  const playerShipsSunk = document.createElement('p');
  const computerShipsSunk = document.createElement('p');
  const modalHeader = document.createElement('p');
  const modalText = document.createElement('p');

  content.id = 'content';
  main.id = 'main';
  boardContainer.id = 'boardcontainer';
  playerBoard.id = 'playerboard';
  playerBoardTitle.id = 'playerboardtitle';
  playerBoardTitle.textContent = 'PLACE YOUR SHIPS';
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
  computerShipsSunk.id = 'computershipssunk';
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
  carrierContainer.classList.add('ship', 'horizontal');
  battleshipContainer.id = 'battleship';
  battleshipContainer.classList.add('ship', 'horizontal');
  destroyerContainer.id = 'destroyer';
  destroyerContainer.classList.add('ship', 'horizontal');
  submarineContainer.id = 'submarine';
  submarineContainer.classList.add('ship', 'horizontal');
  patrolBoatContainer.id = 'patrolboat';
  patrolBoatContainer.classList.add('ship', 'horizontal');
  shipContainerInfo.id = 'shipcontainerinfo';
  orientationButton.id = 'orientationbutton';
  orientationButton.textContent = 'CHANGE DIRECTION';
  shipButtons.id = 'shipbuttons';
  playerShipsSunk.textContent = 'PLAYER SHIPS SUNK: 0';

  playerStatus.append(
    playerShipsSunk,
  );
  computerStatus.append(
    computerShipsSunk,
  );
  gameStatusContainer.append(
    playerStatus,
    computerStatus,
  );
  boardTitleContainer.append(
    playerBoardTitle,
    computerBoardTitle,
  );
  shipButtons.append(
    orientationButton,
    startButton,
    resetButton,
  );
  shipContainerInfo.append(
    shipContainer,
    shipButtons,
  );
  boardContainer.append(
    shipContainerInfo,
    playerBoard,
    computerBoard,
    overlay,
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
  );
  content.append(
    titlebar,
    main,
  );

  const handlePlacement = (e) => {
    const selectedShipSelector = document.querySelector('.shipselected');
    const squares = document.querySelectorAll('.playersquare');
    const manualX = parseInt(e.target.getAttribute('data-x'), 10);
    const manualY = parseInt(e.target.getAttribute('data-y'), 10);
    const manualI = parseInt(e.target.getAttribute('data-i'), 10);
    let orientation;
    let collision = 0;
    let selectedShip;
    if (selectedShipSelector !== undefined && selectedShipSelector !== null) {
      if (selectedShipSelector.id === 'carrier') {
        selectedShip = players.p1.ships.carrier;
      } else if (selectedShipSelector.id === 'battleship') {
        selectedShip = players.p1.ships.battleship;
      } else if (selectedShipSelector.id === 'destroyer') {
        selectedShip = players.p1.ships.destroyer;
      } else if (selectedShipSelector.id === 'submarine') {
        selectedShip = players.p1.ships.submarine;
      } else if (selectedShipSelector.id === 'patrolboat') {
        selectedShip = players.p1.ships.patrolboat;
      }
      if (selectedShipSelector.classList.contains('horizontal')) {
        orientation = 0;
      } else if (selectedShipSelector.classList.contains('vertical')) {
        orientation = 1;
      }
    }
    if (e.type === 'mouseenter' && selectedShipSelector !== undefined && selectedShipSelector !== null) {
      if (selectedShipSelector.classList.contains('horizontal')) {
        if (manualX <= (10 - selectedShip.length)) {
          for (let x = 0; x < selectedShip.length; x += 1) {
            if (squares[manualI + x].classList.contains('placed')) {
              collision += 1;
            }
            squares[manualI + x].classList.add(`${selectedShipSelector.id}`);
          }
        } else if (manualX > (10 - selectedShip.length)) {
          for (let x = 0; x < (10 - manualX); x += 1) {
            squares[manualI + x].classList.add('invalid');
          } collision += 1;
        }
      } else if (selectedShipSelector.classList.contains('vertical')) {
        if (manualY <= (10 - selectedShip.length)) {
          for (let x = 0, y = 0; x < selectedShip.length; x += 1, y += 9) {
            if (squares[manualI + (x + y)].classList.contains('placed')) {
              collision += 1;
            }
            squares[manualI + (x + y)].classList.add(`${selectedShipSelector.id}`);
          }
        } else if (manualY > (10 - selectedShip.length)) {
          for (let x = 0, y = 0; x < (10 - manualY); x += 1, y += 9) {
            squares[manualI + (x + y)].classList.add('invalid');
            collision += 1;
          }
        }
      }
      if (collision > 0) {
        Array.from(document.getElementsByClassName(selectedShipSelector.id)).forEach(
          (element) => { element.classList.add('invalid'); },
        );
      }
    } else if (e.type === 'mouseleave' && selectedShipSelector !== undefined && selectedShipSelector !== null) {
      if (selectedShipSelector.classList.contains('horizontal')) {
        if (manualX <= (10 - selectedShip.length)) {
          for (let x = 0; x < selectedShip.length; x += 1) {
            squares[manualI + x].classList.remove(`${selectedShipSelector.id}`, 'invalid');
          }
        } else if (manualX > (10 - selectedShip.length)) {
          for (let x = 0; x < (10 - manualX); x += 1) {
            squares[manualI + x].classList.remove(`${selectedShipSelector.id}`, 'invalid');
          }
        }
      } else if (selectedShipSelector.classList.contains('vertical')) {
        if (manualY <= (10 - selectedShip.length)) {
          for (let x = 0, y = 0; x < selectedShip.length; x += 1, y += 9) {
            squares[manualI + (x + y)].classList.remove(`${selectedShipSelector.id}`, 'invalid');
          }
        } else if (manualY > (10 - selectedShip.length)) {
          for (let x = 0, y = 0; x < (10 - manualY); x += 1, y += 9) {
            squares[manualI + (x + y)].classList.remove(`${selectedShipSelector.id}`, 'invalid');
          }
        }
      }
    } else if (e.type === 'click' && selectedShipSelector !== undefined && selectedShipSelector !== null && collision === 0) {
      if (!e.target.classList.contains('invalid')) {
        Array.from(document.getElementsByClassName(selectedShipSelector.id)).forEach(
          (element) => { element.classList.add('placed'); },
        );
      }
      if (e.target.classList.contains('placed') && !e.target.classList.contains('invalid')) {
        shipPlacement('manual', orientation, manualX, manualY, selectedShip);
        selectedShipSelector.remove();
        if (document.querySelector('.carrier') !== null
        && document.querySelector('.battleship') !== null
        && document.querySelector('.destroyer') !== null
        && document.querySelector('.submarine') !== null
        && document.querySelector('.patrolboat') !== null) {
          orientationButton.style.display = 'none';
          startButton.style.display = 'block';
        }
      }
    }
  };

  const changeOrientation = (e) => {
    const ships = document.querySelectorAll('.ship');
    if (e.target.id === 'orientationbutton') {
      ships.forEach((element) => {
        const elementToModify = element;
        if (element.classList.contains('horizontal')) {
          shipContainer.style.flexDirection = 'row-reverse';
          elementToModify.style.flexDirection = 'column';
          elementToModify.classList.remove('horizontal');
          elementToModify.classList.add('vertical');
          orientationButton.textContent = 'SWITCH TO HORIZONTAL';
        } else if (element.classList.contains('vertical')) {
          shipContainer.style.flexDirection = 'column';
          elementToModify.style.flexDirection = 'row';
          elementToModify.classList.remove('vertical');
          elementToModify.classList.add('horizontal');
          orientationButton.textContent = 'SWITCH TO VERTICAL';
        }
      });
    }
  };

  for (let n = 0; n < 5; n += 1) {
    const shipSquare = document.createElement('div');
    shipSquare.className = 'shipsquare';
    carrierContainer.append(shipSquare);
  }

  for (let n = 0; n < 4; n += 1) {
    const shipSquare = document.createElement('div');
    shipSquare.className = 'shipsquare';
    battleshipContainer.append(shipSquare);
  }

  for (let n = 0; n < 3; n += 1) {
    const shipSquare = document.createElement('div');
    shipSquare.className = 'shipsquare';
    destroyerContainer.append(shipSquare);
  }

  for (let n = 0; n < 3; n += 1) {
    const shipSquare = document.createElement('div');
    shipSquare.className = 'shipsquare';
    submarineContainer.append(shipSquare);
  }

  for (let n = 0; n < 2; n += 1) {
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
    playerSquare.addEventListener('mouseenter', handlePlacement);
    playerSquare.addEventListener('mouseleave', handlePlacement);
    playerSquare.addEventListener('click', handlePlacement);
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
    if (e.target.id === 'startbutton') {
      shipContainerInfo.style.display = 'none';
      computerBoard.style.display = 'flex';
      computerBoardTitle.style.display = 'block';
      gameStatusContainer.style.display = 'flex';
      startButton.style.display = 'none';
    } else if (e.target.id === 'resetbutton' || e.target.id === 'playagainbutton') {
      reset('partial');
      orientationButton.textContent = 'CHANGE DIRECTION';
      startButton.style.display = 'none';
      orientationButton.style.display = 'block';
      shipContainerInfo.style.display = 'flex';
      computerBoard.style.display = 'none';
      computerBoardTitle.style.display = 'none';
      gameStatusContainer.style.display = 'none';
      resetButton.style.display = 'none';
      overlay.style.display = 'none';
      shipContainer.append(
        carrierContainer,
        battleshipContainer,
        destroyerContainer,
        submarineContainer,
        patrolBoatContainer,
      );
      shipContainer.style.flexDirection = 'column';
      document.querySelectorAll('.ship').forEach(
        (element) => { element.classList.remove('shipselected', 'vertical'); element.classList.add('horizontal'); element.style.flexDirection = 'row'; },
      );
    }
  });

  shipContainer.addEventListener('click', (e) => {
    if (e.target.className === 'shipsquare') {
      const shipSquares = document.querySelectorAll('.ship');
      shipSquares.forEach((element) => {
        element.classList.remove('shipselected');
      });
      e.target.parentNode.classList.add('shipselected');
    }
  });

  shipButtons.addEventListener('click', (e) => {
    if (e.target.id === 'startbutton') {
      shipPlacement('automatic');
      playerBoardTitle.textContent = 'PLAYER';
      shipContainerInfo.style.display = 'none';
      computerBoard.style.display = 'flex';
      computerBoardTitle.style.display = 'block';
      gameStatusContainer.style.display = 'flex';
      startButton.style.display = 'none';
      resetButton.style.display = 'block';
    } else if (e.target.id === 'orientationbutton') {
      changeOrientation(e);
    }
  });
}
