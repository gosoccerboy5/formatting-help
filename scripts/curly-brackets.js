const input = document.querySelector("#input");
const output = document.querySelector("#output");
const button = document.querySelector("#button");


String.prototype.times = function(amt) {
    let returnVal = "";
    for (let i = 0; i < amt; i++) returnVal += this;
    return returnVal;
};
button.onclick = function(event) {
    if (document.querySelector("#sameline").checked) {
        output.value = input.value.replaceAll(/\s*\n\s*{/g, " {");
    } else if (document.querySelector("#newline").checked) {
        output.value = input.value.replaceAll(/^.*{\s*$/gm, function(n) {
            n = n.trimRight();
            return n.substring(0, n.length - 1) + "\n" + n.match(/^\s?/)[0].times(n.match(/^\s*/gi)[0].length) + "{";
        });
    }
};
document.querySelector("#sameline").addEventListener("change", button.onclick);
document.querySelector("#newline").addEventListener("change", button.onclick);
input.addEventListener("input", button.onclick);
input.focus();