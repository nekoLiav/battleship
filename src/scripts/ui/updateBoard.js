import updateSunk from './updateSunk';

export default function updateBoard(attackedPlayer, n, hit) {
  const playerSquare = document.getElementsByClassName('player-square');
  const computerSquare = document.getElementsByClassName('computer-square');

  if (attackedPlayer === 'player') {
    if (hit === true) {
      playerSquare[n].classList.add('hit');
    } else {
      playerSquare[n].classList.add('miss');
    }
  }

  if (attackedPlayer === 'computer') {
    if (hit === true) {
      computerSquare[n].classList.add('hit');
    } else {
      computerSquare[n].classList.add('miss');
    }
  }
  updateSunk();
}
