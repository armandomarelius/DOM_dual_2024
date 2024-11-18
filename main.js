// # Ejercicios básicos de selección del DOM

// ### Ejercicio 1:
// Selecciona el elemento `h1` por su ID.
const elementH1 = document.getElementById("contenedorPrincipal").querySelector("h1");
console.log(elementH1);
elementH1.style.color = "red"; //estilos en linea
elementH1.textContent = "Hola Mundo"; // contenido del elemento

// ### Ejercicio 2:
// Selecciona todos los párrafos con la clase "parrafo" dentro del `contenedorPrincipal`.
const elementsParrafo = document.querySelectorAll("#contenedorPrincipal .parrafo");
console.log(elementsParrafo);

// ### Ejercicio 3:
// Selecciona el elemento `img` por su atributo `src`.
const img = document.querySelector('img[src="imagen.png"]');
console.log(img);

// ### Ejercicio 4:
// Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.
const spanElements = document.querySelectorAll("#contenedorSecundario span");
console.log(spanElements);

// ### Ejercicio 5:
// Selecciona el primer párrafo con la clase "importante".
const parrafoImportanteClass = document.querySelector(".parrafo.importante");
console.log(parrafoImportanteClass);

// ### Ejercicio 6:
// Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".
const parrafosContenedorPrincipal = document.querySelectorAll("#contenedorPrincipal p");
console.log(parrafosContenedorPrincipal);

// ### Ejercicio 7:
// Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".
const elementosDataAtributo = document.querySelectorAll("[data-atributo='valor1']");
console.log(elementosDataAtributo);

// ### Ejercicio 8:
// Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".
const parrafosImportantes= document.querySelectorAll(".parrafo.importante");
const segundoParrafoImportante = parrafosImportantes.length>1 ? parrafosImportantes[1] : null;
console.log(segundoParrafoImportante);

// ### Ejercicio 9:
// Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedor".
const spansContenedor = document.querySelectorAll(".contenedor span");
console.log(spansContenedor);

// ### Ejercicio 10:
// Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".
const parrafosContenedorPrincipalClaseParrafo = document.querySelectorAll("#contenedorPrincipal .parrafo");
const tercerParrafoContenedorPrincipal = parrafosContenedorPrincipalClaseParrafo.length > 2 ? parrafosContenedorPrincipalClaseParrafo[2] : null;
console.log(tercerParrafoContenedorPrincipal);




// ------------ RELACION DE EJERCICIOS 2 ----------------------------
// ### Ejercicio 1:
// Añade un evento de clic a todos los elementos `<span>` dentro del `contenedorSecundario`. Cuando se haga clic, cambia el color de fondo del elemento al azar.
const elementsSpan = document.querySelectorAll("#contenedorSecundario span");
// Añade el evento de clic a cada <span>
elementsSpan.forEach(span => {
    span.addEventListener("click", () => {
      span.style.backgroundColor = "blue";  
    });
  });

// ### Ejercicio 2:
// Crea una función que muestre una alerta con el contenido de cualquier párrafo que tenga la clase "parrafo" cuando se haga doble clic en él.
const parrafos = document.querySelectorAll("p.parrafo");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("click", () => {
        alert(parrafo.textContent);
    })
})

// ### Ejercicio 3:
// Añade un evento de cambio a un `<select>` que está fuera del `contenedorPrincipal`. Cuando se cambie el valor, actualiza el texto del elemento `h1` al nuevo valor seleccionado.
const selector = document.querySelector("#selector");
const titulo = document.querySelector("#contenedorPrincipal h1");

selector.addEventListener("change", () =>{
    titulo.textContent = selector.value;
})

// ### Ejercicio 4:
// Crea una función que cambie el contenido de todos los párrafos dentro del `contenedorSecundario` cuando se presione la tecla "Enter". El nuevo contenido debe ser un texto aleatorio (por ejemplo, "Nuevo contenido").
const parrafosContenedorSecundario = document.querySelectorAll("#contenedorSecundario p");

document.addEventListener("keydown", (event) => {
    if(event.key == "Enter"){
        parrafosContenedorSecundario.forEach(parrafo => {
            parrafo.textContent = "Nuevo contenido";
        })
    }
})

// ### Ejercicio 5:
// Añade un evento de clic a cualquier elemento con la clase "etiqueta". Cuando se haga clic, elimina el elemento del DOM.
const elementEtiqueta = document.querySelectorAll(".etiqueta");

elementEtiqueta.forEach(elemento => {
    elemento.addEventListener("click", () => {
        elemento.remove();
    })
})

// ### Ejercicio 6:
// Crea una función que cambie el color de todos los elementos `<span>` dentro del `contenedorSecundario` cuando se mueva el mouse sobre ellos. El nuevo color debe ser azul.
const spansContenedorSecundario = document.querySelectorAll("#contenedorSecundario span");

spansContenedorSecundario.forEach(etiqueta => {
    etiqueta.addEventListener("mouseover", ()=>{
        etiqueta.style.color="Blue";
    });
    // he añadido esto para que sea como un hover
    etiqueta.addEventListener("mouseout", ()=> {
        etiqueta.style.color="black";
    
    });
})

// ### Ejercicio 7:
// Añade un evento de carga a la página. Cuando la página se cargue, muestra una alerta con el texto "Página cargada".
// window.addEventListener("load", () => {
//     alert("Página cargada");
// })

// ### Ejercicio 8:
// Crea una función que cambie el tamaño del texto de todos los párrafos dentro del `contenedorPrincipal` cuando se haga clic en el elemento `img`. El nuevo tamaño debe ser el doble del tamaño actual.
const imagen = document.querySelector("img");

imagen.addEventListener("click", () => {
    parrafosContenedorPrincipal.forEach(parrafo => {
        parrafo.style.fontSize="50px";
    })
})

// ### Ejercicio 9:
// Añade un evento de teclado a la página. Cuando se presione cualquier tecla, muestra una alerta con el código de la tecla presionada.
document.addEventListener("keydown", (event) => {
    alert(event.key);
})

// ### Ejercicio 10:
// Crea una función que cambie el color de fondo del `contenedorPrincipal` cuando se haga clic en cualquier elemento dentro de él. El nuevo color debe ser verde.
const contenedorPrincipal = document.getElementById("contenedorPrincipal");
contenedorPrincipal.addEventListener("click", () => {
    contenedorPrincipal.style.backgroundColor="lightgreen";
})
