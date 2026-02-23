let selection = ["🪨", "📃", "✂️"];

const shotSelection = document.getElementById("shot-selection");

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("button")) return;
  let randSelection = selection[Math.floor(Math.random() * selection.length)];

  shotSelection.innerText = randSelection;
});
