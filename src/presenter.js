import sumar from "./sumador.js";
import restar from "./restador.js";
import multi from "./multiplicador.js";
import dividir from "./divisor.js";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const div = document.querySelector("#resultado-div");

const buttons = {
    sumar: document.querySelector("#sumar-button"),
    restar: document.querySelector("#rest-button"),
    multiplicar: document.querySelector("#mult-button"),
    dividir: document.querySelector("#div-button")
};

Object.keys(buttons).forEach((key) => {
    buttons[key].addEventListener("click", (event) => {
        event.preventDefault();

        const firstNumber = Number.parseInt(first.value);
        const secondNumber = Number.parseInt(second.value);
        let resultado;

        switch (key) {
            case "sumar":
                resultado = sumar(firstNumber, secondNumber);
                break;
            case "restar":
                resultado = restar(firstNumber, secondNumber);
                break;
            case "multiplicar":
                resultado = multi(firstNumber, secondNumber);
                break;
            case "dividir":
                resultado = dividir(firstNumber, secondNumber);
                break;
        }

        div.innerHTML = "<p>" + resultado + "</p>";
    });
});
