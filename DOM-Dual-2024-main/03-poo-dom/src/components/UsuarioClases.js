export class UsuarioClases{
    #password; //Propiedad privada
    constructor(nombre, email, password){
        this.nombre = nombre;
        this.email = email;
        this.#password = password;
    }
    
    //métodos públicos :
    login(emailIntroducido, passwordIntroducido) {
        //comprobar el email y el password.
        if(this.email = emailIntroducido && this.#password === passwordIntroducido){
            return `Bienvenido ${this.nombre}`;
        } else {
            return 'Error en las credenciales';
        }
    }

    updateEmail(newEmail) {
        //actualizamos email
        this.email = newEmail;
        return `Email actualizado correctamente`;
    }

    //obtener toda la información del USUARIO
    getInfo() {
        return `Usuario: ${this.nombre} - email: ${this.email}`;
    }
}