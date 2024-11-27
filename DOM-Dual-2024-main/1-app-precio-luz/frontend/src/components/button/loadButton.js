/**
 * Crear un boton que tenga texto cargar precio de la luz con id load_price_btn , 
 */

export const createLoadButton = () => {
    const button = document.createElement("button");
    button.id="load-price-btn";
    button.textContent="Cargar precio de la luz";
    return button;
}