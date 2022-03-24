import ship from './shipFactory';

export default function gameBoard(name) {
  const owner = name;
  const boardArray = [];

  const ships = {
    carrier: ship(5, 'carrier', owner),
    battleship: ship(4, 'battleship', owner),
    destroyer: ship(3, 'destroyer', owner),
    submarine: ship(3, 'submarine', owner),
    patrolboat: ship(2, 'patrolboat', owner),
  };

  const placeShip = (shippy, orientation, x, y) => {
    const locationXY = [x, y];
    let locationIndex = 0;
    for (let i = 0; i < boardArray.length; i += 1) {
      if (boardArray[i][0] === locationXY[0] && boardArray[i][1] === locationXY[1]) {
        locationIndex = i;
      }
    }
    if (orientation === 0) {
      for (let i = 0; i < shippy.length; i += 1) {
        boardArray[locationIndex + i].push(shippy.type, i);
      }
    }
    if (orientation === 1) {
      for (let i = 0, n = 0; i < shippy.length; i += 1, n += 10) {
        boardArray[locationIndex + n].push(shippy.type, i);
      }
    }
  };

  const sunkShips = () => {
    let sunkCounter = 0;
    if (ships.carrier.isSunk() === true) {
      sunkCounter += 1;
    }
    if (ships.battleship.isSunk() === true) {
      sunkCounter += 1;
    }
    if (ships.destroyer.isSunk() === true) {
      sunkCounter += 1;
    }
    if (ships.submarine.isSunk() === true) {
      sunkCounter += 1;
    }
    if (ships.patrolboat.isSunk() === true) {
      sunkCounter += 1;
    } return sunkCounter;
  };

  const endGame = () => {
    const overlay = document.getElementById('overlay');
    const modalHeader = document.getElementById('modalheader');
    if (sunkShips() === 5) {
      if (owner === 'computer') {
        modalHeader.textContent = 'YOU WIN! (=^_^=)';
        overlay.style.display = 'flex';
      } else if (owner === 'player') {
        modalHeader.textContent = 'YOU LOSE! <(-_-<)';
        overlay.style.display = 'flex';
      }
    }
  };

  const hitCount = () => {
    let hitCounter = 0;
    for (let i = 0; i < 100; i += 1) {
      if (boardArray[i].length > 3 && boardArray[i][2] === 1) {
        hitCounter += 1;
      }
    } return hitCounter;
  };

  const missCount = () => {
    let missCounter = 0;
    for (let i = 0; i < 100; i += 1) {
      if (boardArray[i].length === 3 && boardArray[i][2] === 1) {
        missCounter += 1;
      }
    } return missCounter;
  };

  const receiveAttack = (i) => {
    boardArray[i][2] = 1;
    if (boardArray[i][3] === 'carrier') {
      ships.carrier.hit(boardArray[i][4]);
    } else if (boardArray[i][3] === 'battleship') {
      ships.battleship.hit(boardArray[i][4]);
    } else if (boardArray[i][3] === 'destroyer') {
      ships.destroyer.hit(boardArray[i][4]);
    } else if (boardArray[i][3] === 'submarine') {
      ships.submarine.hit(boardArray[i][4]);
    } else if (boardArray[i][3] === 'patrolboat') {
      ships.patrolboat.hit(boardArray[i][4]);
    }
    endGame();
  };

  const populate = () => {
    for (let i = 0, x = 0, y = 0; i < 100; i += 1, x += 1) {
      if (x === 10) {
        x = 0;
        y += 1;
      }
      boardArray.push([x, y, 0]);
    }
  };

  const clean = () => {
    boardArray.splice(0);
    populate();
    ships.carrier.clean();
    ships.battleship.clean();
    ships.destroyer.clean();
    ships.submarine.clean();
    ships.patrolboat.clean();
  };

  populate();

  return {
    ships,
    boardArray,
    placeShip,
    receiveAttack,
    sunkShips,
    clean,
    hitCount,
    missCount,
  };
}
