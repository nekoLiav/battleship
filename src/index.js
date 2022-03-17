import content from './dom/scripts/content';
import boards from './dom/scripts/boards';
import playerBoard from './dom/scripts/playerBoard';
import computerBoard from './dom/scripts/computerBoard';
import { boardContainer } from './dom/scripts/boards';
import './dom/styles/index.css';
import './dom/styles/content.css';
import './dom/styles/boards.css';
import './dom/styles/playerBoard.css';
import './dom/styles/computerBoard.css';
import { gameBoard } from './game/gameBoard';

const player = gameBoard();
const computer = gameBoard();

content();
boards();
playerBoard();
computerBoard();

boardContainer.addEventListener('click', (e) => {
  let coordX = e.target.getAttribute('data-x');
  let coordY = e.target.getAttribute('data-y');
  if (e.target.parentNode.id === 'playercontainer') {
    player.receiveAttack(coordX, coordY);
  } else if (e.target.parentNode.id === 'computercontainer') {
    computer.receiveAttack(coordX, coordY);
  }
});