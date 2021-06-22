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
        let _temp = "";
        const split = input.value.split("\n");
        for (let i = 0; i < split.length; i++) {
            _temp += split[i].replace(new RegExp("^" + " ".times(Number(number.value))), "")+ "\n";
        }
        target.value = _temp;
        // When the trigger is clicked,
        // it iterates through the input box, splits it by line-break, and removes the necessary spaces from each line
    };

    input.oninput = function() {
        number.value = input.value.split("\n")[0].match(/^ */gm)[0].length;
        trigger.onclick(); // Automatically update
    }; // Basically, detect the amount of preceding spaces on the first line, and then use that value to "guess".

    input.oninput(); // "Guess" the amount of spaces when the page loads.
    input.focus(); // Focus on the input area on page load so you can instantly paste code
})(document.querySelector("#input"), document.querySelector("#output"), document.querySelector("#amount"), document.querySelector("#trigger"));
// Uses an IIFE to save lines, and portray "reusable" code.