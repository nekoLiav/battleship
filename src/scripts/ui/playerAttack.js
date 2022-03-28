import { computer } from '../helpers/players';
import updateBoard from './updateBoard';
import updateStatus from './updateStatus';
import computerAttack from '../helpers/computerAttack';

export default function playerAttack(e) {
  if (e.target.parentNode.id === 'computer-board') {
    const dataIndex = e.target.getAttribute('data-i');
    if (computer.board[dataIndex][2] === 0) {
      computer.receiveAttack(dataIndex);
      if (computer.board[dataIndex].length > 3) {
        updateBoard('computer', dataIndex, true);
      } else {
        updateBoard('computer', dataIndex, false);
      }
      updateStatus();
      computerAttack();
    }
  }
}
