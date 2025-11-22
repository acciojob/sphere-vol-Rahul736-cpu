function volume_sphere(event) {
    event.preventDefault();

    const radius = parseFloat(document.getElementById("radius").value);
    const volumeField = document.getElementById("volume");

    if (isNaN(radius) || radius < 0) {
        volumeField.value = "NaN";
        return;
    }

    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volumeField.value = volume.toFixed(4);
}

