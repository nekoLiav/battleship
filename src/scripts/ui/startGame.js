import placeComputerShips from '../helpers/placeComputerShips';
import setBoard from './setBoard';
import updateStatus from './updateStatus';

export default function startGame() {
  setBoard();
  placeComputerShips();
  updateStatus();
}
