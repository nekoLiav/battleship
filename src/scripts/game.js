import init from "./init";
import { player, computer } from "./players";


export default function game() {

  init();

  const checkSquares = document.getElementsByClassName('playersquare');

  for (let i = 0; i < 100; i++) {
    if (player.boardArray[i][4] >= 0) {
      checkSquares[i].classList.add('occupied');
    }
  }

}