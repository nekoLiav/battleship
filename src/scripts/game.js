import { players } from "./players"

let playerHitCounter = 0;
let playerMissCounter = 0;

export default function game() {

  let randomComputerSelectionArray = [];

  const playerHit = document.getElementById('playerhit');
  const playerMiss = document.getElementById('playermiss');

  for (let i = 0; i < 100; i++) {
    if (players.player.boardArray[i][2] === 0) {
      randomComputerSelectionArray.push([players.player.boardArray[i][0], players.player.boardArray[i][1]]);
    }
  }

  let randomComputerSelection = randomComputerSelectionArray[Math.floor(Math.random() * randomComputerSelectionArray.length)];
  
  players.player.receiveAttack(randomComputerSelection[0], randomComputerSelection[1]);

  const checkSquaresPlayer = document.getElementsByClassName('playersquare');

  for (let i = 0; i < 100; i++) {
    if (players.player.boardArray[i][0] === randomComputerSelection[0] && players.player.boardArray[i][1] === randomComputerSelection[1]) {
      if (players.player.boardArray[i].length > 3) {
        checkSquaresPlayer[i].classList.add('hit');
        playerHitCounter += 1;
      } else {
        checkSquaresPlayer[i].classList.add('miss');
        playerMissCounter += 1;
      }
    }
  }

  playerHit.textContent = 'PLAYER BOARD HITS: ' + playerHitCounter;
  playerMiss.textContent = 'PLAYER BOARD MISSES: ' + playerMissCounter;

  const endGame = () => {
    if (players.player.sunkShips() === 5) {
      alert('You lost!');
    } else if (players.computer.sunkShips() === 5) {
      alert('You win!');
    }
  };

  endGame();
}