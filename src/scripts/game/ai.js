import { player } from './players';
import endGame from './endGame';

export default function ai() {
  const playerSquare = document.getElementsByClassName('player-square');
  const validAIAttacks = [];

  for (let i = 0; i < 100; i += 1) {
    if (player.boardArray[i][2] === 0) {
      validAIAttacks.push([player.boardArray[i][0], player.boardArray[i][1], i]);
    }
  }

  const randomAIAttack = validAIAttacks[Math.floor(Math.random() * validAIAttacks.length)];

  player.receiveAttack(randomAIAttack[2]);

  endGame();

  if (player.boardArray[randomAIAttack[2]].length > 3) {
    playerSquare[randomAIAttack[2]].classList.add('hit');
  } else {
    playerSquare[randomAIAttack[2]].classList.add('miss');
  }
}
