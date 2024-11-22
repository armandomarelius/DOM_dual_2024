/**
 * DATA DE EJEMPLO: con nombre, eadad e email
 * [
 *  {nombre: "Juan", edad:25, email: "juan@gmail.com"},
 *  {nombre: "Ana", edaad:35, email: "ana@gmail.com"}
 * ]
 */

const dynamicTable = (data, headers) => {
    //creamos una tabla 
    const table = document.createElement("table");
    table.id="table-data-users";
    table.style.border = "1";
    //creamos el thead
    const thead = document.createElement("thead");
   // creamos el tr
   const headerRow = document.createElement("tr");
   // recorremos los headers
   headers.forEach(header => {
        // creamos cada th
        const th = document.createElement("th");
        th.textContent = header;
        // SI QUIERO QUE AL HACER CLICK EL HEADER ORDENE LA TABLA 
        //aqui iria la lógica de ordenacion
        //añadimos cada th al tr
        headerRow.appendChild(th);
   });
   //añadimos el tr al thead
   thead.appendChild(headerRow);

   // creamos el tbody
   const tbody = document.createElement("tbody");
   //limpiamos la tabla 
   tbody.innerHTML = "";
   // recorremos los datos 
   data.forEach(user => {
        //creamos cada tr
        const trUser = document.createElement("tr");
        trUser.innerHTML= `
        <td>${user.nombre}</td>
        <td>${user.eadad}</td>
        <td>${user.email}</td>
        <td>${user.nombre}</td>`;

        //inyectamos las tr al tbody
        tbody.appendChild(trUser);
   })

   // añadimos el thead a la tabla y el tbody a la tabla 
   table.append(thead, body);
   return table;
};

export default dynamicTable