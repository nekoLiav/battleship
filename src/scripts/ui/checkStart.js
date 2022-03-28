import { player } from '../game/players';

export default function checkStart() {
  if (player.placedShips.length === 5) {
    document.getElementById('direction-button').style.display = 'none';
    document.getElementById('start-button').style.display = 'block';
  }
}
