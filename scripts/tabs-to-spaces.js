const input = document.querySelector("#input");
const output = document.querySelector("#output");
const button = document.querySelector("#button");
const radio = document.querySelector("#tabs2spaces");
const spacesPerTabs = document.querySelector("#spacesPerTabs");

spacesPerTabs.value = "4";
input.focus();

input.oninput = function(event) {
    if (radio.checked) {
        output.value = input.value.replaceAll(/^\t*/gm, function(n) {
            return " ".repeat(n.length * Number(spacesPerTabs.value));
        });
    } else {
        output.value = input.value.replaceAll(
            /^ */gm,
            n => "\t".repeat(n.length / Number(spacesPerTabs.value))
        );
    }
};

button.onclick = input.oninput;
radio.onchange = input.oninput;
document.querySelector("#spaces2tabs").onchange = input.oninput;
spacesPerTabs.oninput = input.oninput;
