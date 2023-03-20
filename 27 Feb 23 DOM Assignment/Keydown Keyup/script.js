

let main = document.getElementById("main");
let display = document.getElementById("display");

//up
document.addEventListener("keydown", function (e) {
  display.style.color = "red";
  display.innerText = e.key + " is keyDown";
});
//down
document.addEventListener("keyup", function (e) {
  display.style.color = "green";
  display.innerText = e.key + " is keyUp";
});