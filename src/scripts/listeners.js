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
  const checkSquaresComputer = document.getElementsByClassName('computersquare');
  const computerHit = document.getElementById('computerhit');
  const computerMiss = document.getElementById('computermiss');

  boardContainer.addEventListener('click', (e) => {
    let coordX = e.target.getAttribute('data-x');
    let coordY = e.target.getAttribute('data-y');
    if (e.target.parentNode.id === 'computerboard') {
      if (players.computer.boardArray[e.target.getAttribute('data-i')][2] === 0) {
        players.computer.receiveAttack(coordX, coordY);
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
    for (let i = 0; i < 100; i++) {
      players.player.boardArray[i].splice(3, 4);
      players.computer.boardArray[i].splice(3, 4);
      checkSquaresPlayer[i].classList.remove('occupied', 'hit', 'miss');
      checkSquaresComputer[i].classList.remove('hit', 'miss');
    }
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
    for (let i = 0; i < 100; i++) {
      players.player.boardArray[i].splice(3, 4);
      players.computer.boardArray[i].splice(3, 4);
      players.player.boardArray[i][2] = 0;
      players.computer.boardArray[i][2] = 0;
      checkSquaresPlayer[i].classList.remove('occupied', 'hit', 'miss');
      checkSquaresComputer[i].classList.remove('hit', 'miss');
    }
    players.player.boardShips.carrier.shipArray.splice(0);
    players.player.boardShips.battleship.shipArray.splice(0);
    players.player.boardShips.destroyer.shipArray.splice(0);
    players.player.boardShips.submarine.shipArray.splice(0);
    players.player.boardShips.patrolboat.shipArray.splice(0);
    players.computer.boardShips.carrier.shipArray.splice(0);
    players.computer.boardShips.battleship.shipArray.splice(0);
    players.computer.boardShips.destroyer.shipArray.splice(0);
    players.computer.boardShips.submarine.shipArray.splice(0);
    players.computer.boardShips.patrolboat.shipArray.splice(0);
    for (let i = 0; i < players.player.boardShips.carrier.length; i++) {
      players.player.boardShips.carrier.shipArray.push(0);
    }
    console.log(players.player.boardShips.carrier.shipArray.length);
    for (let i = 0; i < players.player.boardShips.battleship.length; i++) {
      players.player.boardShips.battleship.shipArray.push(0);
    }
    for (let i = 0; i < players.player.boardShips.destroyer.length; i++) {
      players.player.boardShips.destroyer.shipArray.push(0);
    }
    for (let i = 0; i < players.player.boardShips.submarine.length; i++) {
      players.player.boardShips.submarine.shipArray.push(0);
    }
    for (let i = 0; i < players.player.boardShips.patrolboat.length; i++) {
      players.player.boardShips.patrolboat.shipArray.push(0);
    }
    for (let i = 0; i < players.computer.boardShips.carrier.length; i++) {
      players.computer.boardShips.carrier.shipArray.push(0);
    }
    for (let i = 0; i < players.computer.boardShips.battleship.length; i++) {
      players.computer.boardShips.battleship.shipArray.push(0);
    }
    for (let i = 0; i < players.computer.boardShips.destroyer.length; i++) {
      players.computer.boardShips.destroyer.shipArray.push(0);
    }
    for (let i = 0; i < players.computer.boardShips.submarine.length; i++) {
      players.computer.boardShips.submarine.shipArray.push(0);
    }
    for (let i = 0; i < players.computer.boardShips.patrolboat.length; i++) {
      players.computer.boardShips.patrolboat.shipArray.push(0);
    }
    startButton.style.display = 'block';
    randomButton.style.display = 'block';
    restartButton.style.display = 'none';
    computerOverlay.style.display = 'block';
    shipsPlaced = 0;
  });
}