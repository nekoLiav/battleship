import { player, computer } from './players';

export default function endGame() {
  const overlay = document.getElementById('overlay');
  const modalHeader = document.getElementById('modal-header');
  if (computer.sunkShips() === 5) {
    modalHeader.textContent = 'YOU WIN!  (=^_^=)';
    overlay.style.display = 'flex';
  } else if (player.sunkShips() === 5) {
    modalHeader.textContent = 'YOU LOSE!  <(-_-<)';
    overlay.style.display = 'flex';
  }
}
