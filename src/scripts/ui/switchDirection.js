/* eslint-disable no-param-reassign */
export default function switchDirection() {
  document.querySelectorAll('.ship').forEach((element) => {
    if (element.classList.contains('horizontal')) {
      document.getElementById('ships').style.flexDirection = 'row-reverse';
      element.style.flexDirection = 'column';
      element.classList.remove('horizontal');
      element.classList.add('vertical');
      document.getElementById('direction-button').textContent = 'SWITCH TO HORIZONTAL';
    } else if (element.classList.contains('vertical')) {
      document.getElementById('ships').style.flexDirection = 'column';
      element.style.flexDirection = 'row';
      element.classList.remove('vertical');
      element.classList.add('horizontal');
      document.getElementById('direction-button').textContent = 'SWITCH TO VERTICAL';
    }
  });
}
