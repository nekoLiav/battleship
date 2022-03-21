import players from './players';

export default function ai() {
  const validAIAttacks = [];

  for (let i = 0; i < 100; i += 1) {
    if (players.p1.boardArray[i][2] === 0) {
      validAIAttacks.push([players.p1.boardArray[i][0], players.p1.boardArray[i][1], i]);
    }
  }

  const randomAIAttack = validAIAttacks[Math.floor(Math.random() * validAIAttacks.length)];

  players.p1.receiveAttack(randomAIAttack[2]);

  const playerSquare = document.getElementsByClassName('playersquare');

  if (players.p1.boardArray[randomAIAttack[2]].length > 3) {
    playerSquare[randomAIAttack[2]].classList.add('hit');
  } else {
    playerSquare[randomAIAttack[2]].classList.add('miss');
  }
}
