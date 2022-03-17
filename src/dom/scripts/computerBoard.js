import { boardContainer } from "./boards";

export default function computerBoard() {
  const computerBoardContainer = document.createElement('div');
  computerBoardContainer.id = 'computercontainer';

  for (let i = 0, x = 0, y = 0; i < 100; i++, x++) {
    if (x === 10) {
      x = 0;
      y += 1;
    }
    const computerBoardSquare = document.createElement('div');
    computerBoardSquare.dataset.x = x;
    computerBoardSquare.dataset.y = y;
    computerBoardSquare.className = 'computersquare';
    computerBoardContainer.appendChild(computerBoardSquare);
  }
  boardContainer.appendChild(computerBoardContainer);
}