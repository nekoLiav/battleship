export default function setBoard() {
  document.getElementById('start-button').style.display = 'none';
  document.getElementById('ship-container').style.display = 'none';
  document.getElementById('player-board').style.gridColumnStart = '2';
  document.getElementById('player-info').style.gridColumnStart = '2';
  document.getElementById('player-board').style.gridColumnEnd = '12';
  document.getElementById('player-info').style.gridColumnEnd = '12';
  document.getElementById('computer-info').style.display = 'flex';
  document.getElementById('computer-board').style.display = 'grid';
}
