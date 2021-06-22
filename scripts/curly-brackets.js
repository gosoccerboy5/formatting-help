const input = document.querySelector("#input");
const output = document.querySelector("#output");
const button = document.querySelector("#button");

button.onclick = function(event) {
    output.value = input.value.replaceAll(/ *\n *{/g, " {");
};
input.addEventListener("input", button.onclick);
input.focus();