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
        output.value = input.value.replaceAll(/ *\n *{/g, " {");
    } else if (document.querySelector("#newline").checked) {
        output.value = input.value.replaceAll(/^ *.*{ *$/gm, function(n) {
            return n.substring(0, n.length - 1) + "\n" + " ".times(n.match(/^ */gi)[0].length) + "{";
        });
    }
};
document.querySelector("#sameline").addEventListener("change", button.onclick);
document.querySelector("#newline").addEventListener("change", button.onclick);
input.addEventListener("input", button.onclick);
input.focus();