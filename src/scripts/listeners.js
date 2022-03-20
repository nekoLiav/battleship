import init from './init';
import { players } from './players';

export default function listeners() {

  const boardContainer = document.getElementById('boardcontainer');
  const randomButton = document.getElementById('randombutton');

  boardContainer.addEventListener('click', (e) => {

    let coordX = e.target.getAttribute('data-x');
    let coordY = e.target.getAttribute('data-y');

    if (e.target.parentNode.id === 'computerboard') {
      if (players.computer.boardArray[e.target.getAttribute('data-i')].length > 3) {
        e.target.classList.add('hit');
      } else {
        e.target.classList.add('miss');
      }
    }

    if (e.target.parentNode.id === 'computerboard') {
      players.computer.receiveAttack(coordX, coordY);
    }

  });

  randomButton.addEventListener('click', init);
}