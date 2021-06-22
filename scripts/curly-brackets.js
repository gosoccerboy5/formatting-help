const input = document.querySelector("#input");
console.log(input);
const output = document.querySelector("#output");
input.addEventListener("input", function(event) {
    output.value = input.value.replaceAll(/ *\n *{/g, " {");
});