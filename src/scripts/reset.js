import { players } from "./players";

export default function reset() {

  for (let i = 0; i < 100; i++) {
    players.player.boardArray[i].splice(3, 4);
    players.computer.boardArray[i].splice(3, 4);
    checkSquaresPlayer[i].classList.remove('occupied', 'hit', 'miss');
    checkSquaresComputer[i].classList.remove('hit', 'miss');
  }

  players.player.boardShips.carrier.shipArray = [];
  players.player.boardShips.battleship.shipArray = [];
  players.player.boardShips.destroyer.shipArray = [];
  players.player.boardShips.submarine.shipArray = [];
  players.player.boardShips.patrolboat.shipArray = [];
  players.computer.boardShips.carrier.shipArray = [];
  players.computer.boardShips.battleship.shipArray = [];
  players.computer.boardShips.destroyer.shipArray = [];
  players.computer.boardShips.submarine.shipArray = [];
  players.computer.boardShips.patrolboat.shipArray = [];
  
}