import { boardContainer } from "./boards";

export default function playerBoard() {
  const playerBoardContainer = document.createElement('div');
  playerBoardContainer.id = 'playercontainer';
  
  for (let i = 0; i <= 99; i++) {
    const playerBoardSquare = document.createElement('div');
    playerBoardSquare.id = i;
    playerBoardSquare.className = 'playersquare';
    playerBoardContainer.appendChild(playerBoardSquare);
  }
  boardContainer.appendChild(playerBoardContainer);
}