window.innerWheel = document.querySelector("#wheel_inner");

function rotateWheel(shift) {
    // Rotate the inner codewheel by the given shift, wrapping around if the user goes above 25 or under 0.
    if (shift.value === "26") { shift.value = "0" }
    else if (shift.value === "-1") { shift.value = "25" }
    innerWheel.style.rotate = (shift.value * 13.8461538462) + "deg"; // Shift value * (360 / 26)
}
