import { createLoadButton } from "./components/button/loadButton";
import { createSpinner } from "./components/spinner/spinner";
import { getData } from "./helpers/getDataPrices";

export const urlData = import.meta.env.VITE_API_URL;

//------Declaración de variables --------------------------

// ------------Declaración de funciones ----------------
const handleClick = () => {
    alert("Cargando precios de la luz");

}

//Ejecutamos js cuando se haya cargado todo el DOM
// document.addEventListener("DOMContentLoaded", () => {
//     const app = document.getElementById("app");
//     const spinner = createSpinner();    //Crear el pinner
//     app.appendChild(spinner);   //Añadir el spinner al DOM
// })

// document.addEventListener("DOMContentLoaded", () => {
//     const app = document.getElementById("app");
//     const loadPricesBtn = createLoadButton();
//     app.appendChild(loadPricesBtn);

//     loadPricesBtn.addEventListener("click", handleClick);
// });

const data = getData(urlData);