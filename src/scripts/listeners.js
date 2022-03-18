export default function listeners() {

  const boardContainer = document.getElementById('boardcontainer');

  boardContainer.addEventListener('click', (e) => {
    let coordX = e.target.getAttribute('data-x');
    let coordY = e.target.getAttribute('data-y');
    if (e.target.parentNode.id === 'playercontainer') {
      player.receiveAttack(coordX, coordY);
      console.log(player.ships.destroyer.shipArray);
    } else if (e.target.parentNode.id === 'computercontainer') {
      computer.receiveAttack(coordX, coordY);
      console.log(computer.ships.destroyer.shipArray);
    }
  });
}
