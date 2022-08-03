function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const changeColorText = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", handlerClick);
function handlerClick() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  changeColorText.textContent = getRandomHexColor();
}
