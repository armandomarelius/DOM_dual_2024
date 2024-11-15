//seleccion de elementos del DOM
const appDiv = document.getElementById('app');

//appDiv.innerText = "Hola Mundo";    // texto PLANO
//appDiv.innerHTML = "<h1>Hola Mundo</h1>"; //interpreta código html

//Añadir clases a un elemento o del DOM
appDiv.classList.add("clase1", "clase2");


//Seleccion de ClassName
const items = document.getElementsByClassName("items");

let n=0;
for(const i of items){
    i.textContent=`hola amigo ${++n}`;
}

//selección por clase
const saludoP = document.querySelector(" .saludo");
//traer todos
const saludos = document.querySelectorAll(".saludo");

saludos.forEach((saludo, index) => {
    saludo.innerHTML = `Hola Mundo ${index + 1}`;
})

//añadimos atributos a una etiqueta 
// <img src=

const miGit = document.getElementById("github");
miGit.setAttribute("target", "_blank");
miGit.textContent = "Ir a mi GitHub";
miGit.innerText = "Ir a mi GitHub";