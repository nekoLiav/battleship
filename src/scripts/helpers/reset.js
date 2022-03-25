import { player, computer } from '../game/players';

export default function reset() {
  const playerSquares = document.getElementsByClassName('player-square');
  const computerSquares = document.getElementsByClassName('computer-square');

  for (let i = 0; i < 100; i += 1) {
    playerSquares[i].classList.remove('placed', 'carrier', 'battleship', 'destroyer', 'submarine', 'patrol-boat', 'hit', 'miss');
    computerSquares[i].classList.remove('hit', 'miss');
  }

  player.clean();
  computer.clean();
}
