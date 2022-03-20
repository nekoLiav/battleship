import listeners from "./listeners";
import random from "./random";
import { players } from "./players";
import { ships } from "./ships";

export default function init() {

  listeners();

  const checkSquaresPlayer = document.getElementsByClassName('playersquare');
  const checkSquaresComputer = document.getElementsByClassName('computersquare');

  for (let i = 0; i < 100; i++) {
    players.player.boardArray[i].splice(3, 4);
    players.computer.boardArray[i].splice(3, 4);
    checkSquaresPlayer[i].classList.remove('occupied', 'hit', 'miss');
    checkSquaresComputer[i].classList.remove('hit', 'miss');
  }

  random(ships.carrier, players.player);
  random(ships.battleship, players.player);
  random(ships.destroyer, players.player);
  random(ships.submarine, players.player);
  random(ships.patrolboat, players.player);

  random(ships.carrier, players.computer);
  random(ships.battleship, players.computer);
  random(ships.destroyer, players.computer);
  random(ships.submarine, players.computer);
  random(ships.patrolboat, players.computer);

  for (let i = 0; i < 100; i++) {
    if (players.player.boardArray[i].length > 3) {
      checkSquaresPlayer[i].classList.add('occupied');
    }
  }

}