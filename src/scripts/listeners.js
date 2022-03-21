import { players } from './players';
import random from './random';
import game from './game';

let computerHitCounter = 0;
let computerMissCounter = 0;

export default function listeners() {

  const boardContainer = document.getElementById('boardcontainer');
  const startButton = document.getElementById('startbutton');
  const randomButton = document.getElementById('randombutton');
  const restartButton = document.getElementById('restartbutton');
  const computerOverlay = document.getElementById('computeroverlay')
  const checkSquaresPlayer = document.getElementsByClassName('playersquare');
  const computerHit = document.getElementById('computerhit');
  const computerMiss = document.getElementById('computermiss');

  boardContainer.addEventListener('click', (e) => {
    let coordX = e.target.getAttribute('data-x');
    let coordY = e.target.getAttribute('data-y');
    if (e.target.parentNode.id === 'computerboard') {
      if (players.computer.boardArray[e.target.getAttribute('data-i')][2] === 0) {
        players.computer.receiveAttack(coordX, coordY);
        console.log(players.computer.boardArray);
        game();
        if (players.computer.boardArray[e.target.getAttribute('data-i')].length > 3) {
          e.target.classList.add('hit');
          computerHitCounter += 1;
          computerHit.textContent = 'COMPUTER BOARD HITS: ' + computerHitCounter;
        } else {
          e.target.classList.add('miss');
          computerMissCounter += 1;
          computerMiss.textContent = 'COMPUTER BOARD MISSES: ' + computerMissCounter;
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
    reset();
    random(players.player.boardShips.carrier, players.player);
    random(players.player.boardShips.battleship, players.player);
    random(players.player.boardShips.destroyer, players.player);
    random(players.player.boardShips.submarine, players.player);
    random(players.player.boardShips.patrolboat, players.player);
    random(players.computer.boardShips.carrier, players.computer);
    random(players.computer.boardShips.battleship, players.computer);
    random(players.computer.boardShips.destroyer, players.computer);
    random(players.computer.boardShips.submarine, players.computer);
    random(players.computer.boardShips.patrolboat, players.computer);
    for (let i = 0; i < 100; i++) {
      if (players.player.boardArray[i].length > 3) {
        checkSquaresPlayer[i].classList.add('occupied');
      }
    }
  });

  restartButton.addEventListener('click', () => {
    startButton.style.display = 'block';
    randomButton.style.display = 'block';
    restartButton.style.display = 'none';
    computerOverlay.style.display = 'block';
    shipsPlaced = 0;
    reset();
  });
}