import { player, computer } from '../game/players';

export default function updateUI() {
  const playerStatusText = document.getElementById('player-status-text');
  const computerStatusText = document.getElementById('computer-status-text');

  playerStatusText.textContent = `Ships Remaining: ${5 - player.sunkShips()}`;
  computerStatusText.textContent = `Ships Remaining: ${5 - computer.sunkShips()}`;
}
