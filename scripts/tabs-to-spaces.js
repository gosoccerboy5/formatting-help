const input = document.querySelector("#input"),
    output = document.querySelector("#output"),
    button = document.querySelector("#button"),
    radio = document.querySelector("#tabs2spaces"),
    spacesPerTabs = document.querySelector("#spacesPerTabs");
// Setup variables

spacesPerTabs.value = "4";
input.focus();
// Setup page

input.oninput = function(event) {
    if (radio.checked) {
        // We are converting tabs to spaces
        output.value = input.value.replaceAll(/^\t*/gm, function(n) {
            return " ".repeat(n.length * Number(spacesPerTabs.value));
            // Match tabs after newline, then replace it with spaces
        });
    } else {
        // Spaces to tabs
        output.value = input.value.replaceAll(
            /^ */gm,
            n => "\t".repeat(n.length / Number(spacesPerTabs.value))
            // Match spaces after newline, then replace it with tabs
        );
    }
};

button.onclick = input.oninput;
radio.onchange = input.oninput;
document.querySelector("#spaces2tabs").onchange = input.oninput;
spacesPerTabs.oninput = input.oninput;
// Add event listeners for onchange/oninput for other input methods