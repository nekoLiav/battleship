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
  const shipContainerInfo = document.createElement('div');
  const shipButtons = document.createElement('div');
  const randomButton = document.createElement('button');
  const startButton = document.createElement('button');
  const resetButton = document.createElement('button');
  const playAgainButton = document.createElement('button');
  const orientationButton = document.createElement('button');
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
  randomButton.textContent = 'AUTO PLACE';
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
  shipButtons.append(
    orientationButton,
    randomButton,
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
  buttonContainer.append(
    startButton,
    resetButton,
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

  const handlePlacement = (e) => {
    const squares = document.querySelectorAll('.playersquare');
    const manualX = parseInt(e.target.getAttribute('data-x'), 10);
    const manualY = parseInt(e.target.getAttribute('data-y'), 10);
    const manualI = parseInt(e.target.getAttribute('data-i'), 10);
    const selectedShipSelector = document.querySelector('.shipselected');
    let selectedShip = null;
    if (selectedShipSelector != null) {
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
    }
    if (e.type === 'click' && selectedShipSelector != null) {
      if (selectedShipSelector.id === 'carrier') {
        const carrier = Array.from(document.getElementsByClassName('carrier'));
        carrier.forEach((element) => {
          element.classList.add('placed');
        });
      }
      if (selectedShipSelector.id === 'battleship') {
        const battleship = Array.from(document.getElementsByClassName('battleship'));
        battleship.forEach((element) => {
          element.classList.add('placed');
        });
      }
      if (selectedShipSelector.id === 'destroyer') {
        const destroyer = Array.from(document.getElementsByClassName('destroyer'));
        destroyer.forEach((element) => {
          element.classList.add('placed');
        });
      }
      if (selectedShipSelector.id === 'submarine') {
        const submarine = Array.from(document.getElementsByClassName('submarine'));
        submarine.forEach((element) => {
          element.classList.add('placed');
        });
      }
      if (selectedShipSelector.id === 'patrolboat') {
        const patrolboat = Array.from(document.getElementsByClassName('patrolboat'));
        patrolboat.forEach((element) => {
          element.classList.add('placed');
        });
      }
      selectedShipSelector.remove();
    }
    if (e.type === 'mouseenter' && selectedShipSelector != null) {
      if (selectedShipSelector.classList.contains('horizontal')) {
        if (manualX <= (10 - selectedShip.length)) {
          for (let i = 0; i < selectedShip.length; i += 1) {
            squares[manualI + i].classList.add(`${selectedShipSelector.id}`);
            if (squares[manualI + i].classList.contains('placed')) {
              if (selectedShipSelector.id === 'carrier') {
                const carrier = Array.from(document.getElementsByClassName('carrier'));
                carrier.forEach((element) => {
                  element.classList.add('invalid');
                });
              }
              if (selectedShipSelector.id === 'battleship') {
                const battleship = Array.from(document.getElementsByClassName('battleship'));
                battleship.forEach((element) => {
                  element.classList.add('invalid');
                });
              }
              if (selectedShipSelector.id === 'destroyer') {
                const destroyer = Array.from(document.getElementsByClassName('destroyer'));
                destroyer.forEach((element) => {
                  element.classList.add('invalid');
                });
              }
              if (selectedShipSelector.id === 'submarine') {
                const submarine = Array.from(document.getElementsByClassName('submarine'));
                submarine.forEach((element) => {
                  element.classList.add('invalid');
                });
              }
              if (selectedShipSelector.id === 'patrolboat') {
                const patrolboat = Array.from(document.getElementsByClassName('patrolboat'));
                patrolboat.forEach((element) => {
                  element.classList.add('invalid');
                });
              }
            }
          }
        } else if (manualX > (10 - selectedShip.length)) {
          for (let i = 0; i < (10 - manualX); i += 1) {
            squares[manualI + i].classList.add('invalid');
          }
        }
      } else if (selectedShipSelector.classList.contains('vertical')) {
        if (manualY <= (10 - selectedShip.length)) {
          for (let i = 0, i2 = 0; i < selectedShip.length; i += 1, i2 += 9) {
            squares[manualI + (i + i2)].classList.add(`${selectedShipSelector.id}`);
            if (squares[manualI + (i + i2)].classList.contains('placed')) {
              if (selectedShipSelector.id === 'carrier') {
                const carrier = Array.from(document.getElementsByClassName('carrier'));
                carrier.forEach((element) => {
                  element.classList.add('invalid');
                });
              }
              if (selectedShipSelector.id === 'battleship') {
                const battleship = Array.from(document.getElementsByClassName('battleship'));
                battleship.forEach((element) => {
                  element.classList.add('invalid');
                });
              }
              if (selectedShipSelector.id === 'destroyer') {
                const destroyer = Array.from(document.getElementsByClassName('destroyer'));
                destroyer.forEach((element) => {
                  element.classList.add('invalid');
                });
              }
              if (selectedShipSelector.id === 'submarine') {
                const submarine = Array.from(document.getElementsByClassName('submarine'));
                submarine.forEach((element) => {
                  element.classList.add('invalid');
                });
              }
              if (selectedShipSelector.id === 'patrolboat') {
                const patrolboat = Array.from(document.getElementsByClassName('patrolboat'));
                patrolboat.forEach((element) => {
                  element.classList.add('invalid');
                });
              }
            }
          }
        } else if (manualY > (10 - selectedShip.length)) {
          for (let i = 0, i2 = 0; i < (10 - manualY); i += 1, i2 += 9) {
            squares[manualI + (i + i2)].classList.add('invalid');
          }
        }
      }
    } else if (e.type === 'mouseleave' && selectedShipSelector != null) {
      if (selectedShipSelector.classList.contains('horizontal')) {
        if (manualX <= (10 - selectedShip.length)) {
          for (let i = 0; i < selectedShip.length; i += 1) {
            squares[manualI + i].classList.remove(`${selectedShipSelector.id}`, 'invalid');
          }
        } else if (manualX > (10 - selectedShip.length)) {
          for (let i = 0; i < (10 - manualX); i += 1) {
            squares[manualI + i].classList.remove(`${selectedShipSelector.id}`, 'invalid');
          }
        }
      } else if (selectedShipSelector.classList.contains('vertical')) {
        if (manualY <= (10 - selectedShip.length)) {
          for (let i = 0, i2 = 0; i < selectedShip.length; i += 1, i2 += 9) {
            squares[manualI + (i + i2)].classList.remove(`${selectedShipSelector.id}`, 'invalid');
          }
        } else if (manualY > (10 - selectedShip.length)) {
          for (let i = 0, i2 = 0; i < (10 - manualY); i += 1, i2 += 9) {
            squares[manualI + (i + i2)].classList.remove(`${selectedShipSelector.id}`, 'invalid');
          }
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
          carrierContainer.style.width = '50px';
          battleshipContainer.style.width = '50px';
          destroyerContainer.style.width = '50px';
          submarineContainer.style.width = '50px';
          patrolBoatContainer.style.width = '50px';
          carrierContainer.style.height = '250px';
          battleshipContainer.style.height = '200px';
          destroyerContainer.style.height = '150px';
          submarineContainer.style.height = '150px';
          patrolBoatContainer.style.height = '100px';
          elementToModify.style.flexDirection = 'column';
          elementToModify.classList.remove('horizontal');
          elementToModify.classList.add('vertical');
          orientationButton.textContent = 'SWITCH TO HORIZONTAL';
        } else if (element.classList.contains('vertical')) {
          shipContainer.style.flexDirection = 'column';
          carrierContainer.style.width = '250px';
          battleshipContainer.style.width = '200px';
          destroyerContainer.style.width = '150px';
          submarineContainer.style.width = '150px';
          patrolBoatContainer.style.width = '100px';
          carrierContainer.style.height = '50px';
          battleshipContainer.style.height = '50px';
          destroyerContainer.style.height = '50px';
          submarineContainer.style.height = '50px';
          patrolBoatContainer.style.height = '50px';
          elementToModify.style.flexDirection = 'row';
          elementToModify.classList.remove('vertical');
          elementToModify.classList.add('horizontal');
          orientationButton.textContent = 'SWITCH TO VERTICAL';
        }
      });
    }
  };

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
    computerHit.textContent = `COMPUTER BOARD HITS: ${players.c.hitCount()}`;
    computerMiss.textContent = `COMPUTER BOARD MISSES: ${players.c.missCount()}`;
    if (e.target.id === 'startbutton') {
      shipContainer.style.display = 'none';
      computerBoard.style.display = 'flex';
      computerBoardTitle.style.display = 'block';
      gameStatusContainer.style.display = 'flex';
      startButton.style.display = 'none';
      randomButton.style.display = 'none';
      resetButton.style.display = 'block';
    } else if (e.target.id === 'resetbutton' || e.target.id === 'playagainbutton') {
      reset('partial');
      shipContainer.style.display = 'flex';
      computerBoard.style.display = 'none';
      computerBoardTitle.style.display = 'none';
      gameStatusContainer.style.display = 'none';
      startButton.style.display = 'block';
      randomButton.style.display = 'block';
      resetButton.style.display = 'none';
    } else if (e.target.id === 'randombutton') {
      console.log('rng');
      reset('full');
    }
    if (e.target.id === 'orientationbutton') {
      changeOrientation(e);
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

  buttonContainer.addEventListener('click', (e) => {
    if (e.target.id === 'startbutton') {
      shipContainerInfo.style.display = 'none';
      computerBoard.style.display = 'flex';
      computerBoardTitle.style.display = 'block';
      gameStatusContainer.style.display = 'flex';
      startButton.style.display = 'none';
      randomButton.style.display = 'none';
      resetButton.style.display = 'block';
    } else if (e.target.id === 'resetbutton' || e.target.id === 'playagainbutton') {
      reset('partial');
      shipContainerInfo.style.display = 'block';
      computerBoard.style.display = 'none';
      computerBoardTitle.style.display = 'none';
      gameStatusContainer.style.display = 'none';
      startButton.style.display = 'block';
      randomButton.style.display = 'block';
      resetButton.style.display = 'none';
    }
  });
}
