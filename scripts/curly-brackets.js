const input = document.querySelector("#input");
const output = document.querySelector("#output");
const button = document.querySelector("#button");
// Setup variables

button.onclick = function(event) {
    if (document.querySelector("#sameline").checked) {
        // We are placing curly brackets on the same line here
        output.value = input.value.replaceAll(/\s*\n\s*{/g, " {");
        // whitespace -> newline -> whitespace -> "{", replace it with " {"
    } else if (document.querySelector("#newline").checked) {
        // We are placing curly brackets on a new line here
        output.value = input.value.replaceAll(
            /^.*{\s*$/gm, // line/string-start -> any characters -> "{" -> whitespace -> end of string/line
            function(n) {
                n = n.trimRight(); // Remove any unexpected whitespace at the end
                return n.substring(0, n.length - 1) + "\n" + n.match(/^\s?/)[0].repeat(n.match(/^\s*/gi)[0].length) + "{";
                // No idea what the above line is :P
            }
        );
    }
};

document.querySelector("#sameline").addEventListener("change", button.onclick);
document.querySelector("#newline").addEventListener("change", button.onclick);
input.addEventListener("input", button.onclick);
input.focus();
// Add event listeners to other elements