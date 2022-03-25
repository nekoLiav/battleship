import { player, computer } from '../game/players';

export default function reset(resetType) {
  const playerSquare = document.getElementById('player-square');
  const computerSquare = document.getElementById('computer-square');

  const resetBoardElements = () => {
    for (let i = 0; i < 100; i += 1) {
      playerSquare[i].classList.remove('placed', 'occupied', 'carrier', 'battleship', 'destroyer', 'submarine', 'patrolboat', 'hit', 'miss');
      computerSquare[i].classList.remove('hit', 'miss');
    }
  };

  const resetBoardInfo = () => {
    player.clean();
    computer.clean();
  };

  const refreshBoardElements = () => {
    for (let i = 0; i < 100; i += 1) {
      if (player.boardArray[i].length > 3) {
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
    refreshBoardElements();
  } else if (resetType === 'partial') {
    resetBoard();
  } else if (resetType === 'refresh') {
    refreshBoardElements();
  }
}
