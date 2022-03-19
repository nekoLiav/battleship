import random from "./random";
import { player, computer } from './players';

export default function listeners() {

  const boardContainer = document.getElementById('boardcontainer');

  boardContainer.addEventListener('click', (e) => {
    let coordX = e.target.getAttribute('data-x');
    let coordY = e.target.getAttribute('data-y');
    if (e.target.parentNode.id === 'playercontainer') {
      player.receiveAttack(coordX, coordY);
      console.log(player.ships.destroyer.shipArray);
    } else if (e.target.parentNode.id === 'computercontainer') {
      computer.receiveAttack(coordX, coordY);
      console.log(computer.ships.destroyer.shipArray);
    }
  });

  const randomButton = document.getElementById('randombutton');

  const checkSquares = document.getElementsByClassName('playersquare');

  randomButton.addEventListener('click', () => {
    random(player.ships.carrier);
    random(player.ships.battleship);
    random(player.ships.destroyer);
    random(player.ships.submarine);
    random(player.ships.patrolboat);
    for (let i = 0; i < 100; i++) {
      if (player.boardArray[i][4] >= 0) {
        checkSquares[i].classList.add('occupied');
      }
    }
    console.log(player.boardArray);
  });
}
