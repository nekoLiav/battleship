export default function checkStart() {
  if (document.querySelector('.carrier') !== null
  && document.querySelector('.battleship') !== null
  && document.querySelector('.destroyer') !== null
  && document.querySelector('.submarine') !== null
  && document.querySelector('.patrol-boat') !== null) {
    document.getElementById('direction-button').style.display = 'none';
    document.getElementById('start-button').style.display = 'block';
  }
}
