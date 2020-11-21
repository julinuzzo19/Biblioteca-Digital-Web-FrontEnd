import * as Constants from "./Constants.js";

export function Bienvenidacliente(cliente) {
  const place = document.getElementById("h3title");
  const element = document.createElement("h3");
  element.innerHTML = `<p class="titlecliente"> ${cliente.nombre}!</p>`;
  place.appendChild(element);
}
/* Cliente creado y seleccionado por defecto */
export function getCliente(id) {
  fetch(Constants.URL_API_CLIENTES + id)
    .then((response) => response.json())
    .then((cliente) => {
      Bienvenidacliente(cliente);
    });
}
