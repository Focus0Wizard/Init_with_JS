const form = document.querySelector("#form-saludator");
const name = document.querySelector("#User-name");
const gender = document.querySelector("#gender");
const div = document.querySelector("#resultado-div");

const buttons = {
    spanish: document.querySelector("#saludo-button"),
    english: document.querySelector("#hail-button")
};


Object.keys(buttons).forEach((key) => {
    buttons[key].addEventListener("click", (event) => {
    event.preventDefault();

    let Hi  = "Hola"
    const nombre = name.value
    const genero = gender.value

    switch (key) {
        case "spanish":
            Hi = "Hola"
        break;
        case "english":
            Hi = "Hello"
        break;
    }

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
});

function saludar(nombre, genero, idioma){

    let Hi  = " "

    switch (idioma) {
        case "spanish":
            Hi = "Hola"
        break;
        case "english":
            Hi = "Hello"
        break;
    }

    if(genero === "male"){
        Hi = Hi + " Sr. "
    }else if(genero === "female"){
        Hi = Hi + " Sra. "
    }else{
        Hi = Hi + " "
    }

    const Saludo = Hi + " " + nombre
    return Saludo
}