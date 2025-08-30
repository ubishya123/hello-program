btn.addEventListener("click", () => {
  toggled = !toggled;
  document.body.style.filter = toggled ? "hue-rotate(30deg)" : "none";
  status.textContent = toggled ? "Nice! Background hue toggled." : "Back to default. Click again!";
  btn.textContent = toggled ? "Undo" : "Click me";
});
