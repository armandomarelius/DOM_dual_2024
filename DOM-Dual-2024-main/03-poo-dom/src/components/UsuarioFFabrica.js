// La función fabrica es la que retorna un objeto
export function UsuarioFFabrica(nombre, email, passowrd){
    let __password = passowrd;
    return {
        nombre,
        email,
        login(emailIntroducido, passwordIntroducido){
             //comprobar el email y el password.
            if(this.email = emailIntroducido && _password === passwordIntroducido){
                return `Bienvenido ${this.nombre}`;
            } else {
                return 'Error en las credenciales';
        }
        },
        updateEmail(newEmail){
             //actualizamos email
            this.email = newEmail;
            return `Email actualizado correctamente`;
        },
        //obtener toda la información del USUARIO
        getInfo() {
        return `Usuario: ${this.nombre} - email: ${this.email}`;
        }    
    }
}