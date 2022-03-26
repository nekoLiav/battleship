import ship from './ship';

export default function gameBoard(name) {
  const owner = name;
  const board = [];
  const ships = {
    carrier: ship(5, 'carrier', owner),
    battleship: ship(4, 'battleship', owner),
    destroyer: ship(3, 'destroyer', owner),
    submarine: ship(3, 'submarine', owner),
    patrolboat: ship(2, 'patrolboat', owner),
  };

  const placeShip = (shipId, orientation, x, y) => {
    const locationXY = [x, y];
    let locationIndex = 0;
    for (let i = 0; i < board.length; i += 1) {
      if (board[i][0] === locationXY[0] && board[i][1] === locationXY[1]) {
        locationIndex = i;
      }
    }
    if (orientation === 0) {
      for (let i = 0; i < shipId.length; i += 1) {
        board[locationIndex + i].push(shipId.type, i);
      }
    }
    if (orientation === 1) {
      for (let i = 0, n = 0; i < shipId.length; i += 1, n += 10) {
        board[locationIndex + n].push(shipId.type, i);
      }
    }
  };

  const sunkShips = () => {
    let sunkCounter = 0;
    if (ships.carrier.sunk()) {
      sunkCounter += 1;
    }
    if (ships.battleship.sunk()) {
      sunkCounter += 1;
    }
    if (ships.destroyer.sunk()) {
      sunkCounter += 1;
    }
    if (ships.submarine.sunk()) {
      sunkCounter += 1;
    }
    if (ships.patrolboat.sunk()) {
      sunkCounter += 1;
    } return sunkCounter;
  };

  const receiveAttack = (i) => {
    board[i][2] = 1;
    if (board[i][3] === 'carrier') {
      ships.carrier.hit(board[i][4]);
    } else if (board[i][3] === 'battleship') {
      ships.battleship.hit(board[i][4]);
    } else if (board[i][3] === 'destroyer') {
      ships.destroyer.hit(board[i][4]);
    } else if (board[i][3] === 'submarine') {
      ships.submarine.hit(board[i][4]);
    } else if (board[i][3] === 'patrolboat') {
      ships.patrolboat.hit(board[i][4]);
    }
  };

  const populate = () => {
    for (let i = 0, x = 0, y = 0; i < 100; i += 1, x += 1) {
      if (x === 10) {
        x = 0;
        y += 1;
      }
      board.push([x, y, 0]);
    }
  };

  const clean = () => {
    board.splice(0);
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
    board,
    placeShip,
    receiveAttack,
    sunkShips,
    clean,
  };
}
