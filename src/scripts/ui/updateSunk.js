import { player, computer } from '../helpers/players';

export default function updateSunk() {
  const playerSquare = document.querySelectorAll('.player-square');
  const computerSquare = document.querySelectorAll('.computer-square');
  switch (true) {
    case player.ships.carrier.sunk():
      player.board.forEach((element) => {
        if (element[3] === 'carrier') {
          if (
            !playerSquare[player.board.indexOf(element)].classList.contains(
              'sunk'
            )
          ) {
            playerSquare[player.board.indexOf(element)].classList.add('sunk');
          }
        }
      });
    case player.ships.battleship.sunk():
      player.board.forEach((element) => {
        if (element[3] === 'battleship') {
          if (
            !playerSquare[player.board.indexOf(element)].classList.contains(
              'sunk'
            )
          ) {
            playerSquare[player.board.indexOf(element)].classList.add('sunk');
          }
        }
      });
    case player.ships.destroyer.sunk():
      player.board.forEach((element) => {
        if (element[3] === 'destroyer') {
          if (
            !playerSquare[player.board.indexOf(element)].classList.contains(
              'sunk'
            )
          ) {
            playerSquare[player.board.indexOf(element)].classList.add('sunk');
          }
        }
      });
    case player.ships.submarine.sunk():
      player.board.forEach((element) => {
        if (element[3] === 'submarine') {
          if (
            !playerSquare[player.board.indexOf(element)].classList.contains(
              'sunk'
            )
          ) {
            playerSquare[player.board.indexOf(element)].classList.add('sunk');
          }
        }
      });
    case player.ships.patrolboat.sunk():
      player.board.forEach((element) => {
        if (element[3] === 'patrolboat') {
          if (
            !playerSquare[player.board.indexOf(element)].classList.contains(
              'sunk'
            )
          ) {
            playerSquare[player.board.indexOf(element)].classList.add('sunk');
          }
        }
      });
    case computer.ships.carrier.sunk():
      computer.board.forEach((element) => {
        if (element[3] === 'carrier') {
          if (
            !computerSquare[computer.board.indexOf(element)].classList.contains(
              'sunk'
            )
          ) {
            computerSquare[computer.board.indexOf(element)].classList.add(
              'sunk'
            );
          }
        }
      });
    case computer.ships.battleship.sunk():
      computer.board.forEach((element) => {
        if (element[3] === 'battleship') {
          if (
            !computerSquare[computer.board.indexOf(element)].classList.contains(
              'sunk'
            )
          ) {
            computerSquare[computer.board.indexOf(element)].classList.add(
              'sunk'
            );
          }
        }
      });
    case computer.ships.destroyer.sunk():
      computer.board.forEach((element) => {
        if (element[3] === 'destroyer') {
          if (
            !computerSquare[computer.board.indexOf(element)].classList.contains(
              'sunk'
            )
          ) {
            computerSquare[computer.board.indexOf(element)].classList.add(
              'sunk'
            );
          }
        }
      });
    case computer.ships.submarine.sunk():
      computer.board.forEach((element) => {
        if (element[3] === 'submarine') {
          if (
            !computerSquare[computer.board.indexOf(element)].classList.contains(
              'sunk'
            )
          ) {
            computerSquare[computer.board.indexOf(element)].classList.add(
              'sunk'
            );
          }
        }
      });
    case computer.ships.patrolboat.sunk():
      computer.board.forEach((element) => {
        if (element[3] === 'patrolboat') {
          if (
            !computerSquare[computer.board.indexOf(element)].classList.contains(
              'sunk'
            )
          ) {
            computerSquare[computer.board.indexOf(element)].classList.add(
              'sunk'
            );
          }
        }
      });
      break;
  }
}
