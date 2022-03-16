export default function boards() {
  const boardContainer= document.createElement('div');
  boardContainer.id = 'boardcontainer';
  boardContainer.addEventListener('click', (e) => {
    console.log(e.target.parentNode.id);
    console.log(e.target.id)
  })
  const contentDiv = document.getElementById('content');
  contentDiv.appendChild(boardContainer);
}