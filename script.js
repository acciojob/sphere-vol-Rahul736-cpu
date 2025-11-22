\

const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("Reset");

// Reset all blocks
function resetColors() {
  const blocks = document.querySelectorAll(".grid-item");
  blocks.forEach(block => block.style.backgroundColor = "transparent");
}

// Change color logic
changeBtn.addEventListener("click", function () {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  resetColors(); // First reset all

  const selectedBlock = document.getElementById(blockId);

  if (selectedBlock) {
    selectedBlock.style.backgroundColor = color;
  }
});

// Reset button
resetBtn.addEventListener("click", resetColors);
