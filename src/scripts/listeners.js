import { players } from './players';
import { ships } from './ships';
import random from './random';

export default function listeners() {

  const boardContainer = document.getElementById('boardcontainer');

  boardContainer.addEventListener('click', (e) => {

    let coordX = e.target.getAttribute('data-x');
    let coordY = e.target.getAttribute('data-y');

    if (e.target.parentNode.id === 'computerboard') {
      if (players.computer.boardArray[e.target.getAttribute('data-i')].length > 3) {
        e.target.classList.add('hit');
      } else {
        e.target.classList.add('miss');
      }
    }

    if (e.target.parentNode.id === 'computerboard') {
      players.computer.receiveAttack(coordX, coordY);
    }

  });

  const randomButton = document.getElementById('randombutton');

  randomButton.addEventListener('click', () => {

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

  });

  const startButton = document.getElementById('startbutton');
  const computerOverlay = document.getElementById('computeroverlay')

  startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    randomButton.style.display = 'none';
    restartButton.style.display = 'block';
    computerOverlay.style.display = 'none';
  });

  const restartButton = document.getElementById('restartbutton');

  restartButton.addEventListener('click', () => {
    startButton.style.display = 'block';
    randomButton.style.display = 'block';
    restartButton.style.display = 'none';
  });
}