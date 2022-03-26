import { player } from './players';
import updateBoard from '../ui/updateBoard';
import updateStatus from '../ui/updateStatus';

export default function computerAttack() {
  const validAttacks = [];

  for (let i = 0; i < 100; i += 1) {
    if (player.board[i][2] === 0) {
      validAttacks.push([player.board[i][0], player.board[i][1], i]);
    }
  }

  const randomAttack = validAttacks[Math.floor(Math.random() * validAttacks.length)];

  player.receiveAttack(randomAttack[2]);
  updateStatus();
  if (player.board[randomAttack[2]].length > 3) {
    updateBoard('player', randomAttack[2], true);
  } else {
    updateBoard('player', randomAttack[2], false);
  }
}
