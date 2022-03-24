import reset from '../helpers/reset';
import autoPlace from '../helpers/autoPlace';
import { computer } from '../players';

export default function buttonEvents(e) {
  const ship = document.querySelectorAll('.ship');
  const overlay = document.getElementById('overlay');
  const carrier = document.getElementById('carrier');
  const battleship = document.getElementById('battleship');
  const destroyer = document.getElementById('destroyer');
  const submarine = document.getElementById('submarine');
  const patrolBoat = document.getElementById('patrol-boat');
  const ships = document.getElementById('ships');
  const directionButton = document.getElementById('direction-button');
  const shipContainer = document.getElementById('ship-container');
  const computerInfo = document.getElementById('computer-info');
  const computerBoard = document.getElementById('computer-board');
  const startButton = document.getElementById('start-button');

  if (e.target.id === 'direction-button') {
    ship.forEach((element) => {
      const elementToModify = element;
      if (element.classList.contains('horizontal')) {
        ships.style.flexDirection = 'row-reverse';
        elementToModify.style.flexDirection = 'column';
        elementToModify.classList.remove('horizontal');
        elementToModify.classList.add('vertical');
        directionButton.textContent = 'SWITCH TO HORIZONTAL';
      } else if (element.classList.contains('vertical')) {
        ships.style.flexDirection = 'column';
        elementToModify.style.flexDirection = 'row';
        elementToModify.classList.remove('vertical');
        elementToModify.classList.add('horizontal');
        directionButton.textContent = 'SWITCH TO VERTICAL';
      }
    });
  }

  if (e.target.id === 'start-button') {
    shipContainer.style.display = 'none';
    computerInfo.style.display = 'flex';
    computerBoard.style.display = 'flex';
    startButton.style.display = 'none';
    autoPlace(computer.ships.carrier);
    autoPlace(computer.ships.battleship);
    autoPlace(computer.ships.destroyer);
    autoPlace(computer.ships.submarine);
    autoPlace(computer.ships.patrolboat);
  } else if (e.target.id === 'play-again-button') {
    reset('partial');
    directionButton.textContent = 'CHANGE DIRECTION';
    startButton.style.display = 'none';
    directionButton.style.display = 'block';
    shipContainer.style.display = 'flex';
    computerInfo.style.display = 'none';
    overlay.style.display = 'none';
    ships.append(
      carrier,
      battleship,
      destroyer,
      submarine,
      patrolBoat,
    );
    ships.style.flexDirection = 'column';
    document.querySelectorAll('.ship').forEach(
      // eslint-disable-next-line no-param-reassign
      (element) => { element.classList.remove('shipselected', 'vertical'); element.classList.add('horizontal'); element.style.flexDirection = 'row'; },
    );
  }
}
