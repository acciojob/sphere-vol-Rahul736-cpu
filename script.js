function volume_sphere() {
    const radiusInput = document.getElementById("radius").value;

    const r = parseFloat(radiusInput);

    if (isNaN(r) || r < 0) {
        document.getElementById("volume").value = "NaN";
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(r, 3);

    document.getElementById("volume").value = volume.toFixed(4);
}
