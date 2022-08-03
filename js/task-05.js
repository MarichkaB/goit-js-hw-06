const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (newInput) => {
  output.textContent = newInput.target.value;
  if (output.textContent === "") {
    output.textContent = "Anonymous";
  }
});
