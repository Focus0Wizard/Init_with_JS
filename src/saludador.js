const form = document.querySelector("#form-saludator");
const name = document.querySelector("#User-name");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const Hi  = "Hola"
    const nombre = name.value
    const Saludo = Hi + " " + nombre
    div.innerHTML = "<p>" + Saludo  + "</p>";
});