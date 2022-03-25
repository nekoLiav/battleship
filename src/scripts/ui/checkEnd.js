import { player, computer } from '../game/players';

export default function checkEnd() {
  if (computer.sunkShips() === 5) {
    document.getElementById('modal-header').textContent = 'YOU WIN!  (=^_^=)';
    document.getElementById('overlay').style.display = 'flex';
  } else if (player.sunkShips() === 5) {
    document.getElementById('modal-header').textContent = 'YOU LOSE!  <(-_-<)';
    document.getElementById('overlay').style.display = 'flex';
  }
}
