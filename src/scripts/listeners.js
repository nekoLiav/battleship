import random from "./random";
import { players } from './players';
import { ships } from "./ships";

export default function listeners() {

  const boardContainer = document.getElementById('boardcontainer');
  const randomButton = document.getElementById('randombutton');
  const checkSquares = document.getElementsByClassName('playersquare');

  boardContainer.addEventListener('click', (e) => {
    let coordX = e.target.getAttribute('data-x');
    let coordY = e.target.getAttribute('data-y');
    if (e.target.parentNode.id === 'playerboard') {
      players.player.receiveAttack(coordX, coordY);
      console.log(players.player.boardArray);
    } else if (e.target.parentNode.id === 'computerboard') {
      players.computer.receiveAttack(coordX, coordY);
    }
  });

  randomButton.addEventListener('click', () => {
    for (let i = 0; i < 100; i++) {
      players.player.boardArray[i].splice(3, 4);
    }
    random(ships.carrier, players.player);
    random(ships.battleship, players.player);
    random(ships.destroyer, players.player);
    random(ships.submarine, players.player);
    random(ships.patrolboat, players.player);
    for (let i = 0; i < 100; i++) {
      if (players.player.boardArray[i].length > 3) {
        checkSquares[i].classList.add('occupied');
      } else {
        checkSquares[i].classList.remove('occupied');
      }
    }
  });

}