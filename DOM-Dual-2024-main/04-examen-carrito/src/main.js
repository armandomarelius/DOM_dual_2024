import Carrito from "./components/Carrito.js";

//Crear instancias carrito // cargar_carrito_localStorage
const carrito = new Carrito();
carrito.cargarLocalStorage();


//declaración de funciones 
const renderListaCarrito = () => {
    //capturamos el ul
    const lista = document.getElementById("lista-productos");
    const totalCarrito = document.getElementById("total-carrito");
    lista.innerHTML= carrito.productos.map((producto, index) => {
        return `
            <li data-id ="${index}">${producto.obtenerInfo()}
                <button class="btn_editar" data-id="${index}">Editar </button>
                <button class="btn_borrar" data-id="${index}">Borrar </button>
            </li>
        `
    }).join("");

    //pongo el total
    totalCarrito.textContent = carrito.calcularTotal();
    //guardo en el localstorage;
    carrito.guardarLocalStorage();

};


const agregarProductoHandler = (event) => {
    //importante: para no recargar la página
    event.preventDefault();
    const nombre = document.getElementById("nombre_producto").value.trim();
    const cantidad = Number(document.getElementById("cantidad_producto").value);
    const precio = Number(document.getElementById("precio_producto").value);

    if(nombre && cantidad > 0 && precio > 0){
        carrito.addProduct(nombre, cantidad, precio);
        //Pintar carrito
        renderListaCarrito();
    } else {
        alert("Error al introducir los valores");
    }
    event.target.reset();   //Al formulario le reseteas todos los valores


};

const manejarAccionesHandler = (event) => {
    const indice = Number(event.target.dataset.id);

    if(event.target.classList.contains("btn_borrar")){
        carrito.borrarProducto(indice);
        renderListaCarrito();
    }

    if(event.target.classList.contains("btn_editar")){
        const newCantidad= Number(prompt("Introduce la nueva cantidad", carrito.productos[indice].cantidad));
        // una vez tengo la uneca canidad, modifico el carrito de productos
        if(newCantidad && newCantidad > 0){
            carrito.editarProducto(indice, Number(newCantidad));
            renderListaCarrito();
        }
    }

}



//Necesito crear instancias de carrito, cargar el varrito del localStorage
// crear un h1 que diga carrito-----con create element
// resto con InnerHTML
//crear un contenedor <form>
//crear inputs Nombre, cantidad, precio
// crear boton de añadir al carrito.

//añadir DIV para colocar los productos de mi carrito

function init(){
const app = document.getElementById("app");
const h1 = document.createElement("h1");
h1.textContent="Carrito";
app.appendChild(h1);

const formContainer = document.createElement("div");
formContainer.classList.add("formularioDiv");
app.appendChild(formContainer);
formContainer.innerHTML =`
    <form id="form-producto">
        <input type="text" id="nombre_producto" placeholder="nombre..." required>
        <input type="number" id="cantidad_producto" placeholder="cantidad..." required>
        <input type="number" id="precio_producto" placeholder="precio..." required>
        <input type="submit" name="addToCart" value="add to Cart">    
    </form>
    <div id="container-productos">  
        <ul id="lista-productos"></ul>
    </div>
    <footer>
        <p> Total del carrito: <strong id="total-carrito">0</strong> </p>
    </footer>
`;

document.getElementById("form-producto").addEventListener("submit", agregarProductoHandler);

document.getElementById("lista-productos").addEventListener("click", manejarAccionesHandler);

//siempre una vez que cargue la página renderizo el carrito
renderListaCarrito();



}
init();










