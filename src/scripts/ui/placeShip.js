import { player } from '../game/players';

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
    const selected = document.querySelector('.selected').id;
    let direction;
    if (document.querySelector('.horizontal') !== null) {
      direction = 0;
    } else if (document.querySelector('.vertical') !== null) {
      direction = 1;
    }
    let ship;
    switch (selected) {
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
      if (validation !== 'overlap' && validation !== undefined) {
        for (let i = 0; i < validation.length; i += 1) {
          playerSquares[validation[i]].classList.add('placing');
        }
      } else if (direction === 0) {
        for (let x = 0; x < 10 - dataX; x += 1) {
          playerSquares[dataI + x].classList.add('invalid');
        }
      } else if (direction === 1) {
        for (let x = 0, y = 0; x < 10 - dataY; x += 1, y += 9) {
          playerSquares[dataI + (x + y)].classList.add('invalid');
        }
      }
    }
    if (
      e.type === 'mouseleave' &&
      e.target.classList.contains('player-square')
    ) {
      if (validation !== 'overlap' && validation !== undefined) {
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
  }
}
