
function volume_sphere() {
  // Get the raw input string
  const raw = document.getElementById("radius").value;

  // Convert to a Number (handles '', 'abc', '5' etc.)
  const radius = Number(raw);

  // Output element
  const out = document.getElementById("volume");

  // Validate: must be a finite number and non-negative
  if (!isFinite(radius) || radius < 0) {
    out.value = "NaN";
    return;
  }

  // Compute volume: V = (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round to 4 decimal places and display
  out.value = volume.toFixed(4);
}

// Wire the button to the function
document.getElementById("calcBtn").addEventListener("click", volume_sphere);


