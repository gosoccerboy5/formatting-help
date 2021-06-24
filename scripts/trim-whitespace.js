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
        target.value = input.value.replaceAll(
            new RegExp("^" + "\\s".times(Number(number.value)), "gm"), 
            ""
        );
        // Detect number of whitespace tokens on newlines, and replace that number of whitespace tokens
        // With an empty string
    };

    input.oninput = function() {
        number.value = input.value.split("\n")[0].match(/^\s*/gm)[0].length;
        trigger.onclick(); // Automatically update
    }; // Basically, detect the amount of preceding spaces on the first line, and then use that value to "guess".

    input.oninput(); // "Guess" the amount of spaces when the page loads.
    input.focus(); // Focus on the input area on page load so you can instantly paste code
})(document.querySelector("#input"), document.querySelector("#output"), document.querySelector("#amount"), document.querySelector("#trigger"));
// Uses an IIFE to save lines, and portray "reusable" code.