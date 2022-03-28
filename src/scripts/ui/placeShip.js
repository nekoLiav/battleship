import { player } from '../helpers/players';
import checkStart from './checkStart';

export default function placeShip(e) {
  if (e.type === 'click') {
    if (e.target.parentNode.classList.contains('ship')) {
      document.querySelectorAll('.ship').forEach((element) => {
        element.classList.remove('selected');
      });
      e.target.parentNode.classList.add('selected');
    }
  }

  if (document.querySelector('.selected') !== null) {
    const playerSquares = document.querySelectorAll('.player-square');
    const dataX = parseInt(e.target.getAttribute('data-x'), 10);
    const dataY = parseInt(e.target.getAttribute('data-y'), 10);
    const dataI = parseInt(e.target.getAttribute('data-i'), 10);
    const selected = document.querySelector('.selected');

    let direction;
    if (document.querySelector('.horizontal') !== null) {
      direction = 0;
    } else if (document.querySelector('.vertical') !== null) {
      direction = 1;
    }

    let ship;
    switch (selected.id) {
      case 'carrier':
        ship = player.ships.carrier;
        break;
      case 'battleship':
        ship = player.ships.battleship;
        break;
      case 'destroyer':
        ship = player.ships.destroyer;
        break;
      case 'submarine':
        ship = player.ships.submarine;
        break;
      case 'patrolboat':
        ship = player.ships.patrolboat;
        break;
    }

    const validation = player.validPlacements(
      ship,
      direction,
      dataX,
      dataY,
      dataI
    );

    if (
      e.type === 'mouseenter' &&
      e.target.classList.contains('player-square')
    ) {
      if (validation !== 'oob' && validation !== 'overlap') {
        for (let x = 0; x < validation.length; x += 1) {
          playerSquares[validation[x]].classList.add('placing');
        }
      } else if (direction === 0) {
        if (validation === 'overlap') {
          for (let x = 0; x < ship.length; x += 1) {
            playerSquares[dataI + x].classList.add('invalid');
          }
        } else {
          for (let x = 0; x < 10 - dataX; x += 1) {
            playerSquares[dataI + x].classList.add('invalid');
          }
        }
      } else if (direction === 1) {
        if (validation === 'overlap') {
          for (let x = 0, y = 0; x < ship.length; x += 1, y += 9) {
            playerSquares[dataI + (x + y)].classList.add('invalid');
          }
        } else {
          for (let x = 0, y = 0; x < 10 - dataY; x += 1, y += 9) {
            playerSquares[dataI + (x + y)].classList.add('invalid');
          }
        }
      }
    }

    if (
      e.type === 'mouseleave' &&
      e.target.classList.contains('player-square')
    ) {
      if (validation !== 'overlap' && validation !== 'oob') {
        for (let i = 0; i < validation.length; i += 1) {
          playerSquares[validation[i]].classList.remove('placing');
        }
      } else if (direction === 0) {
        for (let x = 0; x < 10 - dataX; x += 1) {
          playerSquares[dataI + x].classList.remove('invalid');
        }
      } else if (direction === 1) {
        for (let x = 0, y = 0; x < 10 - dataY; x += 1, y += 9) {
          playerSquares[dataI + (x + y)].classList.remove('invalid');
        }
      }
    }

    if (e.type === 'click' && e.target.classList.contains('player-square')) {
      if (validation !== 'overlap' && validation !== 'oob') {
        document.querySelectorAll('.placing').forEach((element) => {
          element.classList.add('placed');
          element.classList.remove('placing');
        });
        selected.style.display = 'none';
        selected.classList.remove('selected');
        player.placeShip(ship, direction, dataX, dataY, dataI);
        checkStart();
      }
    }
  }
}
