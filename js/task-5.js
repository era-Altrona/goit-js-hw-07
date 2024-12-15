function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const background = document.querySelector('.change-color')
const body = document.body;
const colorSpan = document.querySelector('.color')
background.addEventListener('click', () => {
  const randomHexColor = getRandomHexColor()
  body.style.backgroundColor = randomHexColor;
  colorSpan.textContent = randomHexColor;
})