import placeComputerShips from '../game/placeComputerShips';
import updateStatus from './updateStatus';

export default function startGame() {
  document.getElementById('ship-container').style.display = 'none';
  document.getElementById('computer-info').style.display = 'flex';
  document.getElementById('computer-board').style.display = 'flex';
  document.getElementById('start-button').style.display = 'none';
  placeComputerShips();
  updateStatus();
}
