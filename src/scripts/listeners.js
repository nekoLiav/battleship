import { players } from './players';
import { ships } from './ships';
import random from './random';
import game from './game';

export default function listeners() {

  const boardContainer = document.getElementById('boardcontainer');
  const startButton = document.getElementById('startbutton');
  const randomButton = document.getElementById('randombutton');
  const restartButton = document.getElementById('restartbutton');
  const computerOverlay = document.getElementById('computeroverlay')
  const checkSquaresPlayer = document.getElementsByClassName('playersquare');
  const checkSquaresComputer = document.getElementsByClassName('computersquare');

  boardContainer.addEventListener('click', (e) => {
    let coordX = e.target.getAttribute('data-x');
    let coordY = e.target.getAttribute('data-y');
    if (e.target.parentNode.id === 'computerboard') {
      if (players.computer.boardArray[e.target.getAttribute('data-i')][2] === 0) {
        console.log(players.computer.boardArray[e.target.getAttribute('data-i')][2]);
        players.computer.receiveAttack(coordX, coordY);
        game();
        if (players.computer.boardArray[e.target.getAttribute('data-i')].length >3) {
          e.target.classList.add('hit');
        } else {
          e.target.classList.add('miss');
        }
      }
    }
  });

  let shipsPlaced = 0;

  startButton.addEventListener('click', () => {
    if (shipsPlaced === 1) {
      startButton.style.display = 'none';
      randomButton.style.display = 'none';
      restartButton.style.display = 'block';
      computerOverlay.style.display = 'none';
    } else {
      alert('You must place your ships before you start the game!');
    }
  });

  randomButton.addEventListener('click', () => {
    shipsPlaced = 1;
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

  restartButton.addEventListener('click', () => {
    for (let i = 0; i < 100; i++) {
      players.player.boardArray[i].splice(3, 4);
      players.computer.boardArray[i].splice(3, 4);
      checkSquaresPlayer[i].classList.remove('occupied', 'hit', 'miss');
      checkSquaresComputer[i].classList.remove('hit', 'miss');
    }
    startButton.style.display = 'block';
    randomButton.style.display = 'block';
    restartButton.style.display = 'none';
    computerOverlay.style.display = 'block';
  });
}