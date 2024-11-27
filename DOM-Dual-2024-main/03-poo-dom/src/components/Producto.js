export function Producto(nombre, precio, stock, img ){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.img = img;

    this.getInfo = function(){
        return `Nombre: ${nombre} , Precio: ${precio} , stock: ${stock}, img: ${img} `;
    }

    this.updateStock = function(cantidad){
        if(this.stock + cantidad < 0){
            throw new Error ("No se puede reducir el stock por debajo de 0");
        }

        this.stock -= cantidad;
        return this.stock;
    }
}