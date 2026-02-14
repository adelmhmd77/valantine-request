var button = document.getElementById("no");
var yesBtn = document.querySelector(".btn"); // first button

function moveButton() {
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  button.style.left = randomX + "px";
  button.style.top = randomY + "px";
}

button.onmouseenter = moveButton;
button.onclick = moveButton;

yesBtn.onclick = function () {
  window.location = "yes.html";
};
