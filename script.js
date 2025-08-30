document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("actionBtn");
  const status = document.getElementById("status");
  let toggled = false;
  btn.addEventListener("click", () => {
    toggled = !toggled;
    document.body.style.filter = toggled ? "hue-rotate(30deg)" : "none";
    status.textContent = toggled ? "Nice! Background hue toggled." : "Back to default. Click again!";
  });
});
