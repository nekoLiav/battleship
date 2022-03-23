import players from './players';

export default function shipPlacement(type, manualX, manualY, manualI, selectedShip) {
  const auto = (ship, player) => {
    const randomOrientation = Math.floor(Math.random() * 2);
    const validX = [];
    const validY = [];
    let randomCoords = [];

    if (randomOrientation === 0) {
      for (let i = 0; i < player.boardArray.length; i += 1) {
        if (player.boardArray[i][0] <= (10 - ship.length)) {
          for (let n = 0, x = 0; n < ship.length; n += 1) {
            if (player.boardArray[i + n].length === 3) {
              x += 1;
            }
            if (x === ship.length) {
              validX.push([player.boardArray[i][0], player.boardArray[i][1]]);
            }
          }
        }
      } randomCoords = validX[Math.floor(Math.random() * validX.length)];
    }

    if (randomOrientation === 1) {
      for (let i = 0; i < player.boardArray.length; i += 1) {
        if (player.boardArray[i][1] <= (10 - ship.length)) {
          for (let n = 0, v = 0, y = 0; n < ship.length; n += 1, v += 10) {
            if (player.boardArray[i + v].length === 3) {
              y += 1;
            }
            if (y === ship.length) {
              validY.push([player.boardArray[i][0], player.boardArray[i][1]]);
            }
          }
        }
      } randomCoords = validY[Math.floor(Math.random() * validY.length)];
    }

    player.placeShip(ship, randomOrientation, randomCoords[0], randomCoords[1]);
  };

  const manual = () => {
    const squares = document.querySelectorAll('.playersquare');
    if (selectedShip != null) {
      if (manualX <= (10 - selectedShip.length)) {
        for (let i = 0; i < selectedShip.length; i += 1) {
          squares[manualI + i].classList.add('valid');
        }
      } else if (manualX > (10 - selectedShip.length)) {
        for (let i = 0; i < (10 - manualX); i += 1) {
          squares[manualI + i].classList.add('invalid');
        }
      }
    }
  };

  if (type === 'auto') {
    auto(players.p1.ships.carrier, players.p1);
    auto(players.p1.ships.battleship, players.p1);
    auto(players.p1.ships.destroyer, players.p1);
    auto(players.p1.ships.submarine, players.p1);
    auto(players.p1.ships.patrolboat, players.p1);
    auto(players.c.ships.carrier, players.c);
    auto(players.c.ships.battleship, players.c);
    auto(players.c.ships.destroyer, players.c);
    auto(players.c.ships.submarine, players.c);
    auto(players.c.ships.patrolboat, players.c);
  } else if (type === 'manual') {
    manual();
  }
}
