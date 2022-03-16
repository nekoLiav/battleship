export default function computerBoard() {
  const computerBoardContainer = document.createElement('div');
  computerBoardContainer.id = 'computercontainer';

  for (let i = 0; i <= 99; i++) {
    const computerBoardSquare = document.createElement('div');
    computerBoardSquare.id = i;
    computerBoardSquare.className = 'computersquare';
    computerBoardContainer.appendChild(computerBoardSquare);
  }
  const boardContainer = document.getElementById('boardcontainer');
  boardContainer.appendChild(computerBoardContainer);
}