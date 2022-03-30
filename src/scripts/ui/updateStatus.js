import { player, computer } from '../helpers/players';
import checkEnd from './checkEnd';

export default function updateStatus() {
  document.getElementById('player-status').textContent = `Ships Remaining: ${
    5 - player.sunkShips()
  }`;
  document.getElementById('computer-status').textContent = `Ships Remaining: ${
    5 - computer.sunkShips()
  }`;
  checkEnd();
}
