(function(input, target, number, trigger) {
    String.prototype.times = function(amt) {
        let returnVal = "";
        for (let i = 0; i < amt; i++) {
            returnVal += this;
        }
        return returnVal;
        // "Multiplies" a string.
    };
    trigger.onclick = function() {
        let temp = ""; // We will expand this
        for (let currentLine of input.value.split("\n")) { // iterate through each line of input
            if (currentLine !== "") {
                temp += currentLine.replace(
                    new RegExp("^" + "\\s?".times(Number(number.value))), ""
                );
                // regex matches string-start, then specified amount of whitespace
                // Replaces it with empty string
            }
            temp += "\n"; // add a newline so it doesn't get smushed onto one line
        }
        target.value = temp;
    };

    input.oninput = function() {
        number.value = input.value.split("\n")[0].match(/^\s*/gm)[0].length;
        trigger.onclick(); // Automatically update
    }; // Basically, detect the amount of preceding spaces on the first line, and then use that value to "guess".

    input.oninput(); // "Guess" the amount of spaces when the page loads.
    input.focus(); // Focus on the input area on page load so you can instantly paste code
})(document.querySelector("#input"), document.querySelector("#output"), document.querySelector("#amount"), document.querySelector("#trigger"));
// Uses an IIFE to save lines, and portray "reusable" code.