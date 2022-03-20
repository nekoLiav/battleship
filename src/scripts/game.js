import { players } from "./players"

export default function game() {

  let randomComputerSelectionArray = [];

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
      } else {
        checkSquaresPlayer[i].classList.add('miss');
      }
    }
  }
}