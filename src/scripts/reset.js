import players from './players';
import shipPlacement from './shipPlacement';

export default function reset(resetType) {
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
      playerShipsSunk.textContent = 'SHIPS SUNK: 0';
      playerHit.textContent = 'BOARD HITS: 0';
      playerMiss.textContent = 'BOARD MISSES: 0';
      computerShipsSunk.textContent = 'SHIPS SUNK: 0';
      computerHit.textContent = 'BOARD HITS: 0';
      computerMiss.textContent = 'BOARD MISSES: 0';
    }
  };

  const resetBoardInfo = () => {
    players.p1.clean();
    players.c.clean();
  };

  const refreshBoardElements = () => {
    for (let i = 0; i < 100; i += 1) {
      if (players.p1.boardArray[i].length > 3) {
        playerSquare[i].classList.add('occupied');
      }
    }
  };

  const resetBoard = () => {
    resetBoardElements();
    resetBoardInfo();
  };

  if (resetType === 'full') {
    resetBoard();
    shipPlacement('auto');
    refreshBoardElements();
  } else if (resetType === 'partial') {
    resetBoard();
  } else if (resetType === 'refresh') {
    refreshBoardElements();
  }
}
