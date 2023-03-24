const fontEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

fontEl.addEventListener("input",changeFontEl)

function changeFontEl(event) {
    // console.log(event.currentTarget.value + `px`)
    textEl.style.fontSize = event.currentTarget.value + "px";
}

// const input = document.getElementById("font-size-control");
// const span = document.getElementById("text");
// input.addEventListener("input", handleInputRange);
// function handleInputRange(event) {
//   span.style.fontSize = event.currentTarget.value + "px";
// }