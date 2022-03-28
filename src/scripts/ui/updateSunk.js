import { player, computer } from '../helpers/players';

export default function updateSunk() {
  const playerSquare = document.querySelectorAll('.player-square');
  const computerSquare = document.querySelectorAll('.computer-square');

  if (player.ships.carrier.sunk()) {
    player.board.forEach((element) => {
      if (element[3] === 'carrier') {
        playerSquare[player.board.indexOf(element)].classList.remove('hit');
        playerSquare[player.board.indexOf(element)].classList.add('sunk');
      }
    });
  }
  if (player.ships.battleship.sunk()) {
    player.board.forEach((element) => {
      if (element[3] === 'battleship') {
        playerSquare[player.board.indexOf(element)].classList.remove('hit');
        playerSquare[player.board.indexOf(element)].classList.add('sunk');
      }
    });
  }
  if (player.ships.destroyer.sunk()) {
    player.board.forEach((element) => {
      if (element[3] === 'destroyer') {
        playerSquare[player.board.indexOf(element)].classList.remove('hit');
        playerSquare[player.board.indexOf(element)].classList.add('sunk');
      }
    });
  }
  if (player.ships.submarine.sunk()) {
    player.board.forEach((element) => {
      if (element[3] === 'submarine') {
        playerSquare[player.board.indexOf(element)].classList.remove('hit');
        playerSquare[player.board.indexOf(element)].classList.add('sunk');
      }
    });
  }
  if (player.ships.patrolboat.sunk()) {
    player.board.forEach((element) => {
      if (element[3] === 'patrolboat') {
        playerSquare[player.board.indexOf(element)].classList.remove('hit');
        playerSquare[player.board.indexOf(element)].classList.add('sunk');
      }
    });
  }
  if (computer.ships.carrier.sunk()) {
    computer.board.forEach((element) => {
      if (element[3] === 'carrier') {
        computerSquare[computer.board.indexOf(element)].classList.remove('hit');
        computerSquare[computer.board.indexOf(element)].classList.add('sunk');
      }
    });
  }
  if (computer.ships.battleship.sunk()) {
    computer.board.forEach((element) => {
      if (element[3] === 'battleship') {
        computerSquare[computer.board.indexOf(element)].classList.remove('hit');
        computerSquare[computer.board.indexOf(element)].classList.add('sunk');
      }
    });
  }
  if (computer.ships.destroyer.sunk()) {
    computer.board.forEach((element) => {
      if (element[3] === 'destroyer') {
        computerSquare[computer.board.indexOf(element)].classList.remove('hit');
        computerSquare[computer.board.indexOf(element)].classList.add('sunk');
      }
    });
  }
  if (computer.ships.submarine.sunk()) {
    computer.board.forEach((element) => {
      if (element[3] === 'submarine') {
        computerSquare[computer.board.indexOf(element)].classList.remove('hit');
        computerSquare[computer.board.indexOf(element)].classList.add('sunk');
      }
    });
  }
  if (computer.ships.patrolboat.sunk()) {
    computer.board.forEach((element) => {
      if (element[3] === 'patrolboat') {
        computerSquare[computer.board.indexOf(element)].classList.remove('hit');
        computerSquare[computer.board.indexOf(element)].classList.add('sunk');
      }
    });
  }
}
