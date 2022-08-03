let counterValue = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

const decr = function () {
  counterValue -= 1;
  value.textContent = counterValue;
};

const incr = function () {
  counterValue += 1;
  value.textContent = counterValue;
};

btnDecrement.addEventListener("click", decr);
btnIncrement.addEventListener("click", incr);
