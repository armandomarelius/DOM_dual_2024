//Implementar un perfil de login y actualizacion del perfil usando POO
//Objetivo: crear una CLASE u objeto para modelar el inicio de sesión / perfil.

import { Producto } from "./components/Producto";
import { Usuario } from "./components/Usuario";
import { UsuarioClases } from "./components/UsuarioClases";

const usuario = new Usuario("Armando", "armandomarelius777@gmail.com", "123");
const usuario2 = new UsuarioClases("a", "a@gmail.com", "123");

const app = document.getElementById("app");
app.innerHTML = `
    <h2> Gestión de usuarios</h2>
    <p> ${usuario.getInfo()} </p>
    <button id="btn-login"> Iniciar sesión </button>
    <button id="btn-actualizar-email"> Actualizar email </button>
    
    <div id="form-container">
    </div>
`;

document
  .getElementById("btn-login")
  .addEventListener("click", mostrarFormularioLogin);

document
  .querySelector("#btn-actualizar-email")
  .addEventListener("click", mostrarFormularioUpdateEmail);

function mostrarFormularioLogin() {
  const formContainer = document.getElementById("form-container");
  formContainer.innerHTML = `
        <form>
            <input id = "email-login" type="email" placeholder="emailejemplo@gmail.com">
            <input id="password-login" type="password" placeholder="passowrd">
            <input type="submit" id="btn-enviar-login">
        </from>`;

  document.getElementById("btn-enviar-login").addEventListener("click", () => {
    const email = document.getElementById("email-login").value.trim();
    const passowrd = document.getElementById("password-login").value.trim();
    alert(usuario.login(email, passowrd));
  });
}

function mostrarFormularioUpdateEmail() {
  const formContainer = document.getElementById("form-container");
  formContainer.innerHTML = `
        <form>
            <input type="email" id="newEmail" placeholder="Nuevo email">
             <input type="submit" value="actualizar" id="btn-update-email">
        </form>`;

  document.getElementById("btn-update-email").addEventListener("click", () => {
    const newEmail = document.getElementById("newEmail").value.trim();
    alert(usuario.updateEmail(newEmail));
  });
}

//EJERCICIO2 : Implementar una función constructora que modele un producto, del producto quiero saber el nombre,
// el precio , el stock , una img /url .
// Los métodos : obtener info del producto y actualizar stock, pasándole por parámetro una cantidad. Siempre que haya stock suficiente.
// Genera un array de produtos, renderizalos en el DOM, añade un botón a cada producto que permita actualizar el stock. Aplicar
// 2 de las 3 formas posibles de creación de objetos (minimo uno de POO).

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const productos = [
    new Producto("Botella", 3.5, 10, "urlEjemplo"),
    new Producto("Móvil", 340, 5, "urlEjemplo2"),
    new Producto("Paella", 14, 30, "urlPaella"),
  ];

  // Renderizar en el DOM:
  app.innerHTML = `
        <h2> Ejercicio2 </h2>
        <div id="productsContainer"></div>
    `;
  const productsContainer = document.getElementById("productsContainer");
  productos.forEach((product, index) => {
    productsContainer.innerHTML += `
            <div id="productDiv-${index}">
                <p>${product.getInfo()}</p>
                <button id="btn_updateStock-${index}">Actualizar stock</button>
                <div id="formDiv-${index}"></div>
            </div>
        `;
  });

  //AHORA una vez renderizado el DOM hacemos los eventos necesarios
  productos.forEach((product, index) => {
    // añadimos evento al pulsar botón
    const boton_updateStock = document.getElementById(`btn_updateStock-${index}`);
    boton_updateStock.addEventListener("click", mostrarFormularioUpdateStock);

    function mostrarFormularioUpdateStock() {
      const formularioContainer = document.getElementById(`formDiv-${index}`);
      formularioContainer.innerHTML = `
            <form>
                <input type="number" placeholder="cantidad a actualizar">
                <input type="submit" value="update">
            </form>
       `;
    }
  });
});

// Ejercicio3 : Sistema bancario. Implementar una clase llamada cuenta bancaria que tenga una propiedad privada llamada salto y que
// me permita depositar una cantidad, retirar una cantidad siempre que se pueda (no puedo retirar mas de lo que tengo por ej)
// Genera en el DOM dos contenedores , uno para ingresar y otro para mostrar información del saldo que tengo disponible. El ingresar
// y retirar se hará con un radioButton y otro mostrar información de la cuenta.b
