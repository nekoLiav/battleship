import { computer } from './players';
import updateStatus from '../ui/updateStatus';
import computerAttack from './computerAttack';

export default function playerAttack(e) {
  const computerSquares = document.getElementsByClassName('computer-square');
  if (e.target.parentNode.id === 'computer-board') {
    const dataIndex = e.target.getAttribute('data-i');
    console.log(dataIndex);
    console.log(computer.boardArray);
    if (computer.boardArray[dataIndex][2] === 0) {
      computer.receiveAttack(dataIndex);
      if (computer.boardArray[dataIndex].length > 3) {
        computerSquares[dataIndex].classList.add('hit');
      } else {
        computerSquares[dataIndex].classList.add('miss');
      }
    }
    updateStatus();
    computerAttack();
  }
}
