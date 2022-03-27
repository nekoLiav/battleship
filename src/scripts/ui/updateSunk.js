import { player, computer } from '../game/players';

export default function updateSunk() {
  switch (true) {
    case player.ships.carrier.sunk():
      document.querySelectorAll('.carrier').forEach((element) => {
        element.classList.remove('hit');
        element.classList.add('sunk');
      });
    case player.ships.battleship.sunk():
      document.querySelectorAll('.battleship').forEach((element) => {
        element.classList.remove('hit');
        element.classList.add('sunk');
      });
    case player.ships.destroyer.sunk():
      document.querySelectorAll('.destroyer').forEach((element) => {
        element.classList.remove('hit');
        element.classList.add('sunk');
      });
    case player.ships.submarine.sunk():
      document.querySelectorAll('.submarine').forEach((element) => {
        element.classList.remove('hit');
        element.classList.add('sunk');
      });
    case player.ships.patrolboat.sunk():
      document.querySelectorAll('.patrol-boat').forEach((element) => {
        element.classList.remove('hit');
        element.classList.add('sunk');
      });
      break;
  }
}
