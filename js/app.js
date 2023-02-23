let button = document.getElementById("button");

let input = document.getElementById("input");

button.addEventListener("click", changeColor);

input.addEventListener("keyup", (event) => {
  changeText(event.target.value);
});

function changeColor() {
  document.getElementById("h1-tag").style.color = "red";
}

function changeText(text) {
  document.getElementById("h1-tag").innerText = text;
}
