import randomPlace from './randomPlace';
import { computer } from './players';

export default function placeComputerShips() {
  randomPlace(computer.ships.carrier);
  randomPlace(computer.ships.battleship);
  randomPlace(computer.ships.destroyer);
  randomPlace(computer.ships.submarine);
  randomPlace(computer.ships.patrolboat);
}
