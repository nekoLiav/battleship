import { player, computer } from '../game/players';
import ai from '../game/ai';
import endGame from '../game/endGame';
import updateUI from '../helpers/updateUI';

export default function boardEvents(e) {
  // Variables needed for providing board feedback
  const orientationButton = document.getElementById('direction-button');
  const startButton = document.getElementById('start-button');
  const selectedShipSelector = document.querySelector('.ship-selected');
  const playerSquares = document.querySelectorAll('.player-square');
  const computerSquares = document.getElementsByClassName('computer-square');
  const shipSquares = document.querySelectorAll('.ship');
  const manualX = parseInt(e.target.getAttribute('data-x'), 10);
  const manualY = parseInt(e.target.getAttribute('data-y'), 10);
  const manualI = parseInt(e.target.getAttribute('data-i'), 10);
  let direction;
  let collision = 0;
  let selectedShip;
  // Find correct ship object based on element id (this could be done better)
  if (selectedShipSelector !== undefined && selectedShipSelector !== null) {
    if (selectedShipSelector.id === 'carrier') {
      selectedShip = player.ships.carrier;
    } else if (selectedShipSelector.id === 'battleship') {
      selectedShip = player.ships.battleship;
    } else if (selectedShipSelector.id === 'destroyer') {
      selectedShip = player.ships.destroyer;
    } else if (selectedShipSelector.id === 'submarine') {
      selectedShip = player.ships.submarine;
    } else if (selectedShipSelector.id === 'patrol-boat') {
      selectedShip = player.ships.patrolboat;
    }
    // Assign direction to be passed to placeShip function
    if (selectedShipSelector.classList.contains('horizontal')) {
      direction = 0;
    } else if (selectedShipSelector.classList.contains('vertical')) {
      direction = 1;
    }
  }
  // Handles feedback for selecting ship to be placed
  if (e.target.className === 'ship-square') {
    shipSquares.forEach((element) => {
      element.classList.remove('ship-selected');
    });
    e.target.parentNode.classList.add('ship-selected');
  }
  // Handles board feedback for ship placement validity (out of bounds and intersection)
  if (e.type === 'mouseenter' && selectedShipSelector !== undefined && selectedShipSelector !== null) {
    if (selectedShipSelector.classList.contains('horizontal')) {
      if (manualX <= (10 - selectedShip.length)) {
        for (let x = 0; x < selectedShip.length; x += 1) {
          if (playerSquares[manualI + x].classList.contains('placed')) {
            collision += 1;
          }
          playerSquares[manualI + x].classList.add(`${selectedShipSelector.id}`);
        }
      } else if (manualX > (10 - selectedShip.length)) {
        for (let x = 0; x < (10 - manualX); x += 1) {
          playerSquares[manualI + x].classList.add('invalid');
        } collision += 1;
      }
    } else if (selectedShipSelector.classList.contains('vertical')) {
      if (manualY <= (10 - selectedShip.length)) {
        for (let x = 0, y = 0; x < selectedShip.length; x += 1, y += 9) {
          if (playerSquares[manualI + (x + y)].classList.contains('placed')) {
            collision += 1;
          }
          playerSquares[manualI + (x + y)].classList.add(`${selectedShipSelector.id}`);
        }
      } else if (manualY > (10 - selectedShip.length)) {
        for (let x = 0, y = 0; x < (10 - manualY); x += 1, y += 9) {
          playerSquares[manualI + (x + y)].classList.add('invalid');
          collision += 1;
        }
      }
    }
    if (collision > 0) {
      Array.from(document.getElementsByClassName(selectedShipSelector.id)).forEach(
        (element) => { element.classList.add('invalid'); },
      );
    }
  }
  // Handles board feedback for ship placement validity (out of bounds and intersection)
  if (e.type === 'mouseleave' && selectedShipSelector !== undefined && selectedShipSelector !== null) {
    if (selectedShipSelector.classList.contains('horizontal')) {
      if (manualX <= (10 - selectedShip.length)) {
        for (let x = 0; x < selectedShip.length; x += 1) {
          playerSquares[manualI + x].classList.remove(`${selectedShipSelector.id}`, 'invalid');
        }
      } else if (manualX > (10 - selectedShip.length)) {
        for (let x = 0; x < (10 - manualX); x += 1) {
          playerSquares[manualI + x].classList.remove(`${selectedShipSelector.id}`, 'invalid');
        }
      }
    } else if (selectedShipSelector.classList.contains('vertical')) {
      if (manualY <= (10 - selectedShip.length)) {
        for (let x = 0, y = 0; x < selectedShip.length; x += 1, y += 9) {
          playerSquares[manualI + (x + y)].classList.remove(`${selectedShipSelector.id}`, 'invalid');
        }
      } else if (manualY > (10 - selectedShip.length)) {
        for (let x = 0, y = 0; x < (10 - manualY); x += 1, y += 9) {
          playerSquares[manualI + (x + y)].classList.remove(`${selectedShipSelector.id}`, 'invalid');
        }
      }
    }
  }
  // Handles the act of placing a ship on the board
  if (e.type === 'click'
  && e.target.classList.contains('player-square')
  && selectedShipSelector !== undefined
  && selectedShipSelector !== null
  && collision === 0
  && !e.target.classList.contains('invalid')) {
    Array.from(document.getElementsByClassName(selectedShipSelector.id)).forEach(
      (element) => { element.classList.add('placed'); },
    );
    selectedShipSelector.classList.remove('ship-selected');
    selectedShip.isPlaced = true;
    selectedShipSelector.style.display = 'none';
    player.placeShip(selectedShip, direction, manualX, manualY);
    if (document.querySelector('.carrier') !== null
    && document.querySelector('.battleship') !== null
    && document.querySelector('.destroyer') !== null
    && document.querySelector('.submarine') !== null
    && document.querySelector('.patrol-boat') !== null) {
      orientationButton.style.display = 'none';
      startButton.style.display = 'block';
    }
  }
  // Handles the player attacking the computer board
  if (e.target.parentNode.id === 'computer-board') {
    const dataIndex = e.target.getAttribute('data-i');
    if (computer.boardArray[dataIndex][2] === 0) {
      computer.receiveAttack(dataIndex);
      ai();
      if (computer.boardArray[dataIndex].length > 3) {
        computerSquares[dataIndex].classList.add('hit');
      } else {
        computerSquares[dataIndex].classList.add('miss');
      }
    }
    updateUI();
    endGame();
  }
}
