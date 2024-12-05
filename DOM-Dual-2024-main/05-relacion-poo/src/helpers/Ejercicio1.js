export function Tarea(nombre){
     //propiedades estáticas
    Tarea.contador = 1;
     //propiedades privadas
    //propiedades públicas
    this.nombre = nombre;
    this.completada = false;
    this.id = Tarea.contador++;

    //métodos públicos
    this.toggleCompletada = function() {
        this.completada = !this.completada;
    }

    //método privado
    function logEstado(){
        console.log(`
            La tarea ${this.nombre} está ${this.completada} ? "completada" : "pendiente`);
    }

    //crear un método estático del objeto
    // que lo tengan todas las instancias
    Tarea.prototype.info = function () {
        console.log(`
            La tarea ${this.nombre} está ${
                this.completada ? "completada" : "pendiente"
            }
            `);
    }

}

export class TareaClass {
  //variables de clase
  static contador = 1;
  //propiedad privada
  #completada;
  // constructor
  constructor(nombre) {
    this.id = TareaClass.contador++;
    this.nombre = nombre;
    this.#completada = false;
  }

  //método público
  toggleCompletada() {
    this.#completada = !this.#completada;
  }

  info() {
    console.log(`
               La tarea ${this.nombre} está ${
      this.completada ? "completada" : "pendiente"
    }
    `);
  }
}