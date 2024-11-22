// Inicio de sesión
export default function formComponent() {
    const divFormLogin = document.createElement("div");
    divFormLogin.classList.add("form-container-login");
    divFormLogin.id ="form-container-login";
    // crear un formulariol
    const formEmail = document.createElement("form");
    formEmail.id ="form-login";
    // label username
    const labelUsername = document.createElement("label");
    labelUsername.textContent = "Username ";
    
    //input username
    const inputUsername = document.createElement("input");
    inputUsername.id ="username";
    inputUsername.type="text";
    inputUsername.name="username";
    inputUsername.placeholder="Escribe tu username";
    // label password
    const labelPassword = document.createElement("label");
    labelPassword.textContent = "Password ";

    //input password
    const inputPassword = document.createElement("input");
    inputPassword.id="password";
    inputPassword.type="password";
    inputPassword.naem="password";
    inputPassword.placeholder="Introduce tu password ";

    //button
    const button = document.createElement("button");
    button.id = "button-login";
    button.type = "submit";
    button.textContent= "Iniciar sesión";

    //añadimos TODOS los elementos al formulario y el formulario al div
    formEmail.append(labelUsername, inputUsername, labelPassword, inputPassword, button)
    divFormLogin.appendChild(formEmail);

    return divFormLogin;
}