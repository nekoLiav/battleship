import players from './players';
import random from './random';

export default function reset(type) {
  const playerSquare = document.getElementsByClassName('playersquare');
  const computerSquare = document.getElementsByClassName('computersquare');
  const playerShipsSunk = document.getElementById('playershipssunk');
  const playerHit = document.getElementById('playerhit');
  const playerMiss = document.getElementById('playermiss');
  const computerShipsSunk = document.getElementById('computershipssunk');
  const computerHit = document.getElementById('computerhit');
  const computerMiss = document.getElementById('computermiss');

  const resetBoardElements = () => {
    for (let i = 0; i < 100; i += 1) {
      playerSquare[i].classList.remove('occupied', 'hit', 'miss');
      computerSquare[i].classList.remove('hit', 'miss');
      playerShipsSunk.textContent = 'PLAYER SHIPS SUNK: 0';
      playerHit.textContent = 'PLAYER BOARD HITS: 0';
      playerMiss.textContent = 'PLAYER BOARD MISSES: 0';
      computerShipsSunk.textContent = 'COMPUTER SHIPS SUNK: 0';
      computerHit.textContent = 'COMPUTER BOARD HITS: 0';
      computerMiss.textContent = 'COMPUTER BOARD MISSES: 0';
    }
  };

  const resetBoardInfo = () => {
    players.p1.clean();
    players.c.clean();
  };

  const randomPlayerOneShips = () => {
    random(players.p1.ships.carrier, players.p1);
    random(players.p1.ships.battleship, players.p1);
    random(players.p1.ships.destroyer, players.p1);
    random(players.p1.ships.submarine, players.p1);
    random(players.p1.ships.patrolboat, players.p1);
  };

  const randomComputerShips = () => {
    random(players.c.ships.carrier, players.c);
    random(players.c.ships.battleship, players.c);
    random(players.c.ships.destroyer, players.c);
    random(players.c.ships.submarine, players.c);
    random(players.c.ships.patrolboat, players.c);
  };

  const refreshBoardElements = () => {
    for (let i = 0; i < 100; i += 1) {
      if (players.p1.boardArray[i].length > 3) {
        playerSquare[i].classList.add('occupied');
      }
    }
  };

  if (type === 'full') {
    resetBoardElements();
    resetBoardInfo();
    randomPlayerOneShips();
    randomComputerShips();
    refreshBoardElements();
  } else {
    resetBoardElements();
    resetBoardInfo();
    refreshBoardElements();
  }
}
