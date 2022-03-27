import { player, computer } from '../game/players';
import checkEnd from './checkEnd';

export default function updateStatus() {
  document.getElementById(
    'player-status-text'
  ).textContent = `Ships Remaining: ${5 - player.sunkShips()}`;
  document.getElementById(
    'computer-status-text'
  ).textContent = `Ships Remaining: ${5 - computer.sunkShips()}`;
  checkEnd();
}
