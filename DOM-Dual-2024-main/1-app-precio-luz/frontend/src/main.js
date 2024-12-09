import { createLoadButton } from "./components/button/loadButton";
import { createSpinner, hideSpinner, showSpinner } from "./components/spinner/spinner";
import { createSelector } from "./components/hoursRangeSelect/hoursRangeSelect";
import { getData } from "./helpers/getDataPrices";
import { cardPrices } from "./components/cardPrices/cardPrices";
import  {renderChart} from "./components/chart/chart.js";
import "./styles/main.css";

export const urlData = import.meta.env.VITE_API_URL;
export const hourRanges = import.meta.env.VITE_HOUR_RANGES.split(",");

//------Declaración de variables --------------------------
const pricesByHourRanges = new Map();
const pricesByDate = new Map();
// ------------Declaración de funciones ----------------

const renderPrices = (miMap) => {
    // Buscar si ya existe el contenedor
    let pricesContainer = document.getElementById("prices-container");

    // Si no existe, lo creamos
    if (!pricesContainer) {
        pricesContainer = document.createElement("div");
        pricesContainer.id = "prices-container";
        document.getElementById("app").appendChild(pricesContainer);
    }

    // Limpiar el contenido del contenedor antes de renderizar nuevos datos
    pricesContainer.innerHTML = "";

    // Si no hay datos en el mapa, mostrar un mensaje
    if (miMap.size === 0) {
        pricesContainer.textContent = "No hay datos disponibles para el rango seleccionado.";
        return;
    }

    miMap.forEach((pricesPerHour, date) => {
         const priceCard = cardPrices(date, pricesPerHour);
         pricesContainer.appendChild(priceCard);
    });
}

const handleClick = () => {
    const selectedHourRange = document.getElementById("hour-rangeSelector").value;
    const startHour = selectedHourRange.split("-")[0];
    const endHour = selectedHourRange.split("-")[1];

    pricesByHourRanges.clear();
    pricesByDate.clear();

    showSpinner();
    getData(urlData)
        .then((data) =>{
           const {included} = data;

           for (const item of included){
                const {values} = item.attributes;
                values.forEach(element => {
                    const {value , datetime} = element;       // obtengo precio y fecha 2024-01-01T00:00:00.000+01:00
                    const dt = new Date(datetime);
                    
                    //const hour = parseInt(datetime.split("T")[1].split(":")[0]);
                    //const day = parseInt(datetime.split("T")[0].split("-")[2]);     //obtengo dia

                    if(dt.getHours() >= startHour && dt.getHours() <= endHour){
                        pricesByHourRanges.set(dt.toLocaleString(), value);
                        
                       // Ensure there is a Map for the date
                        if (!pricesByDate.has(dt.getDate())) {
                            pricesByDate.set(dt.getDate(), new Map());
                        }                    
                        // Add the time and value to the inner Map
                        pricesByDate.get(dt.getDate()).set(dt.getHours(), value);
                    }
                   
                });
            } 
            renderChart(pricesByHourRanges);
            renderPrices(pricesByDate);
            hideSpinner();
        })
        .catch((err) =>{ 
            console.error("Error al cargar los datos:", err);
        hideSpinner();  // Ocultar el spinner incluso si ocurre un error
        });
}

// ----------- Main -----------------
//Ejecutamos js cuando se haya cargado todo el DOM 
//creamos spinner
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const spinner = createSpinner();    //Crear el pinner
    app.appendChild(spinner);   //Añadir el spinner al DOM 
    app.innerHTML += `
        <h2>Red eléctrica española</h2>
    `;

    const selector = createSelector();      // Selector
    app.appendChild(selector);

    const loadPricesBtn = createLoadButton();      //Boton cargar
    app.appendChild(loadPricesBtn);

    // Crear el contenedor del gráfico si no existe
    let chartContainer = document.getElementById("chart-container");
    if (!chartContainer) {
           chartContainer = document.createElement("div");
           chartContainer.id = "chart-container";
           app.appendChild(chartContainer); // Añadirlo antes de los otros elementos
    }

    loadPricesBtn.addEventListener("click", handleClick);
});






