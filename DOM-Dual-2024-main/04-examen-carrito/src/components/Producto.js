export default class Producto {
    constructor(nombre, cantidad, precio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    
    calcularTotal(){
        return this.cantidad * this.precio;
    }

    obtenerInfo(){
        return `Nombre: ${this.nombre} --- Cantidad: ${this.cantidad} --- Precio: ${this.precio}
        ---Total: ${this.calcularTotal()}`;
    }

}