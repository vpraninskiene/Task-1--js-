/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const kilograms = document.getElementById("search");
const output = document.getElementById("output");
const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
let input = document.getElementById("search");

if (isNaN(input.value)) {
    alert("Enter a number!")
} else {
    const weightInLb = document.createElement("p");
    weightInLb.innerText = `Pounds: ${(input.value * 2.2046).toFixed(2)}`;
    output.appendChild(weightInLb);
    const weightInG = document.createElement("p");
    weightInG.innerText = `Grams: ${(input.value / 0.0010000).toFixed(2)}`;
    output.appendChild(weightInG);
    const weightInOz = document.createElement("p");
    weightInOz.innerText = `Ounce: ${(input.value * 2.2046).toFixed(2)}`;
    output.appendChild(weightInOz);
          
};

input.value = "";

});










