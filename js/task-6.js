function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const input = document.querySelector('#controls input')
const boxes = document.querySelector('#boxes')

function createBoxes(amount) {
  boxes.innerHTML = ''
  const fragment = document.createDocumentFragment()

  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    fragment.appendChild(box)
  }
  boxes.appendChild(fragment)
}

function destroyBoxes() {
    boxes.innerHTML = '';
}
  
btnCreate.addEventListener('click', () => {
  const amount = Number(input.value.trim());
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } 

})
btnDestroy.addEventListener('click', destroyBoxes)
