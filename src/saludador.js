const form = document.querySelector("#form-saludator");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const Saludo = "Hola"
    div.innerHTML = "<p>" + Saludo  + "</p>";
});