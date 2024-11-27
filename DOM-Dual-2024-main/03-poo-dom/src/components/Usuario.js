export function Usuario (nombre, email, password){
    //variables públicas:
    this.nombre = nombre;
    this.email = email;
    //variables privadas: 
    let __password = password;

    //métodos públicos :
    this.login = function(emailIntroducido, passwordIntroducido) {
        //comprobar el email y el password.
        if(this.email = emailIntroducido && __password === passwordIntroducido){
            return `Bienvenido ${this.nombre}`;
        } else {
            return 'Error en las credenciales';
        }
    }

    this.updateEmail = function(newEmail) {
        //actualizamos email
        this.email = newEmail;
        return `Email actualizado correctamente`;
    }

    //obtener toda la información del USUARIO
    this.getInfo = function() {
        return `Usuario: ${this.nombre} - email: ${this.email}`;
    }
}