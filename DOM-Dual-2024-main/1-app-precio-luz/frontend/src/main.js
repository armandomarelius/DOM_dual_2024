import { createLoadButton } from "./components/button/loadButton";
import { createSpinner, hideSpinner, showSpinner } from "./components/spinner/spinner";
import { createSelector } from "./components/hoursRangeSelect/hoursRangeSelect";
import { getData } from "./helpers/getDataPrices";

export const urlData = import.meta.env.VITE_API_URL;
export const hourRanges = import.meta.env.VITE_HOUR_RANGES.split(",");

//------Declaración de variables --------------------------
const pricesByHourRanges = new Map();
// ------------Declaración de funciones ----------------

const handleClick = () => {
    const selectedHourRange = document.getElementById("hour-rangeSelector").value;
    const startHour = selectedHourRange.split("-")[0];
    const endHour = selectedHourRange.split("-")[1];

    console.log("Rango seleccionado:", selectedHourRange);

    pricesByHourRanges.clear();

    showSpinner();
    getData(urlData)
        .then((data) =>{
           const {included} = data;

           for (const item of included){
                const {values} = item.attributes;
                values.forEach(element => {
                    const {value , datetime} = element;
                    const hour = parseInt(datetime.split("T")[1].split(":")[0]);

                    if(hour >= startHour && hour <= endHour){
                        pricesByHourRanges.set(datetime, value);
                    }
                   
                });
            } 

            console.log(pricesByHourRanges);
            hideSpinner();
        })
        .catch((err) =>{ 
            console.error("Error al cargar los datos:", err);
        hideSpinner();  // Ocultar el spinner incluso si ocurre un error
        });
}

//Ejecutamos js cuando se haya cargado todo el DOM 
//creamos spinner
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const spinner = createSpinner();    //Crear el pinner
    app.appendChild(spinner);   //Añadir el spinner al DOM 
})

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const selector = createSelector();
    app.appendChild(selector);
});

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const loadPricesBtn = createLoadButton();
    app.appendChild(loadPricesBtn);

    loadPricesBtn.addEventListener("click", handleClick);
});



