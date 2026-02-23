let selection = ["🪨", "📃", "✂️"];

const shotSelection = document.getElementById("shot-selection");

document.addEventListener("click", () => {
  let randSelection = selection[Math.floor(Math.random() * selection.length)];

  shotSelection.innerText = randSelection;
});
