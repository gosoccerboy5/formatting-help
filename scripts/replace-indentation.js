const input = document.querySelector("#input");
const button = document.querySelector("#format");
const number = document.querySelector("#spaces");
const oldNumber = document.querySelector("#oldspaces");
// Setup

input.focus(); // Focus on the input area on page load, so you can instantly paste code

button.onclick = function (event) {
    (function (target) {
        document.querySelector("#output").value = (
            target.value.replaceAll(/(\n|^) +/g, n => "\n" + " ".repeat(n.substring(1).length * Number(number.value) / (Number(oldNumber.value))))
        );
    })(input);
    // That was a quite a long line. Basically, the regex matches a pattern of linebreak or string-start, then 1 or more spaces
    // The replacement pattern is a function that return a line-break, and indentation spaces proportionate to how indented the input text was
};

input.oninput = function() {
    const match = this.value.match(/(\n|^) +/g);
    oldNumber.value = match === null ? 2 : match[0].length - (/^ +/.test(this.value.split("\n")[0]) ? 0 : 1);
    //If we cannot guess the amount that each line is indented on with regex, we default to 2.
    // Otherwise, we find the amount that the line is indented on and account for this bug where indentation on the first line
    // is estimated incorrectly.

    number.value = oldNumber.value === "4" ? 2 : 4; // If the value is 4, we assume the user wants to switch to 2 spaces. Otherwise 4.

    button.onclick(); // Automatically update alsos
};

input.oninput(); // Do the above on page load