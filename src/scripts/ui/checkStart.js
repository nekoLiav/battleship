import { player } from '../helpers/players';

export default function checkStart() {
  if (player.placedShips.length === 5) {
    document.getElementById('direction-button').style.display = 'none';
    document.getElementById('start-button').style.display = 'block';
    document.getElementById(
      'player-status'
    ).innerHTML = `Press 'START GAME' to play!`;
  }
}
