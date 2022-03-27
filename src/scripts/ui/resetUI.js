export default function resetUI() {
  document.getElementById('start-button').style.display = 'none';
  document.getElementById('computer-info').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('computer-board').style.display = 'none';
  document.getElementById('direction-button').style.display = 'block';
  document.getElementById('ship-container').style.display = 'flex';
  document.getElementById('ships').style.flexDirection = 'column';
  document.getElementById('carrier').style.display = 'flex';
  document.getElementById('battleship').style.display = 'flex';
  document.getElementById('destroyer').style.display = 'flex';
  document.getElementById('submarine').style.display = 'flex';
  document.getElementById('patrol-boat').style.display = 'flex';
  document.getElementById('player-status-text').textContent =
    'Awaiting ship placement...';
  document.getElementById('direction-button').textContent = 'Switch Direction';
  document.querySelectorAll('.ship').forEach((element) => {
    element.classList.remove('shipselected', 'vertical');
    element.classList.add('horizontal');
    // eslint-disable-next-line no-param-reassign
    element.style.flexDirection = 'row';
  });
  document.querySelectorAll('.player-square').forEach((element) => {
    element.classList.remove(
      'placed',
      'carrier',
      'battleship',
      'destroyer',
      'submarine',
      'patrol-boat',
      'hit',
      'miss'
    );
  });
  document.querySelectorAll('.computer-square').forEach((element) => {
    element.classList.remove('hit', 'miss');
  });
}
