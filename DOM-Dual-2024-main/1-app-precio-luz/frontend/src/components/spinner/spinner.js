/**
 * Spinner con 3 estados : 
 * - Crear el Spinner
 * - Mostrar le Spinner
 * - Ocultar el Spinner
 */

export const createSpinner = () => {
    // voy  a crear el spinner en el DOM 
    const spinner = document.createElement("div");
    spinner.id ="spinner";
    spinner.classList.add("hidden", "spinner");
    spinner.textContent ="Cargando ...";
    return spinner;
}

export const showSpinner = () => {
    // mostrar el spinner
    const spinner = document.getElementsById("spinner");
    spinner.classList.remove("hidden");
}

export const hideSpinner = () => {
    // ocultrar el spinner
    const spinner = document.getElementById("spinner");
    spinner.classList.add("hidden");
}