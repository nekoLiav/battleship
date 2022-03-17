const boardContainer= document.createElement('div');
boardContainer.id = 'boardcontainer';

export default function boards() {
  const contentDiv = document.getElementById('content');
  contentDiv.appendChild(boardContainer);
}

export { boardContainer };