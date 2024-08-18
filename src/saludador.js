const form = document.querySelector("#form-saludator");
const name = document.querySelector("#User-name");
const gender = document.querySelector("#gender");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let Hi  = "Hola"
    const nombre = name.value
    const genero = gender.value

    if(genero === "male"){
        Hi = Hi + " Sr. "
    }else if(genero === "female"){
        Hi = Hi + " Sra. "
    }else{
        Hi = Hi + " "
    }

    const Saludo = Hi + " " + nombre
    div.innerHTML = "<p>" + Saludo  + "</p>";
});