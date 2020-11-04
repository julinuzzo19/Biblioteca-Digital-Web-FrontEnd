import { URL_API_LIBROS } from "./Constants.js";
import * as AlquilerService from "./AlquilerService.js";

export function getlibros() {
  fetch(`https://localhost:44366/api/Libros`)
    .then((response) => response.json())
    .then((lista) => {
      mostrardatos(lista);
    });
}

export function getlibrosbyinput(tituloautor) {
  let regex = /\w[tituloautor]+/;

  fetch(URL_API_LIBROS + `?titulo=${tituloautor}`)
    .then((response) => response.json())
    .then((lista) => {
      for (let i of lista) {
        if (regex.test(i.titulo)) {
          mostrarlibro(i);
          break;
        }
      }
    });

  fetch(URL_API_LIBROS + `?autor=${tituloautor}`)
    .then((response) => response.json())
    .then((lista) => {
      for (let i of lista) {
        if (regex.test(i.autor)) {
          mostrarlibro(i);
        }
      }
    });
}

export function mostrardatos(lista) {
  for (let i of lista) {
    const place = document.getElementById("tbody");
    const element = document.createElement("tr");
    var fila = i;
    if (fila.stock > 0) {
      element.innerHTML = `                                     
            <th class="filalibroindex" scope="row">${fila.isbn}</th>
              <td class="filalibroindex">${fila.titulo}</td>
              <td class="filalibroindex">${fila.autor}</td>
              <td class="filalibroindex">${fila.stock}</td>
              <td class="filalibroindex"><img id="imagen" src="${
                fila.imagen
              }"></td>
           <td class="filalibroindex"> <input type="button" id="${
             fila.isbn + "alquiler"
           }" class="btn btn-lg btn-primary " value="Alquilar"></input>
            <input type="button" id="${
              fila.isbn + "reserva"
            }"  class="btn btn-secondary btn-lg " value="Reservar"></input> </td>`;

      place.appendChild(element);
    }
  }
  /* Realizar Reserva por boton */
  var botonreserva1 = document.getElementById("1reserva");
  if (botonreserva1 != null) {
    botonreserva1.onclick = function () {
      AlquilerService.reservar("1");
      alert("Reserva realizada.");
    };
  }

  var botonreserva2 = document.getElementById("2reserva");
  if (botonreserva2 != null) {
    botonreserva2.onclick = function () {
      AlquilerService.reservar("2");
      alert("Reserva realizada.");
    };
  }

  var botonreserva3 = document.getElementById("3reserva");
  if (botonreserva3 != null) {
    botonreserva3.onclick = function () {
      AlquilerService.reservar("3");
      alert("Reserva realizada.");
    };
  }

  var botonreserva4 = document.getElementById("4reserva");
  if (botonreserva4 != null) {
    botonreserva4.onclick = function () {
      AlquilerService.reservar("4");
      alert("Reserva realizada.");
    };
  }

  var botonreserva5 = document.getElementById("5reserva");
  if (botonreserva5 != null) {
    botonreserva5.onclick = function () {
      AlquilerService.reservar("5");
      alert("Reserva realizada.");
    };
  }

  /* Realizar alquiler por boton */

  var boton = document.getElementById("1alquiler");
  if (boton != null) {
    boton.onclick = function () {
      AlquilerService.alquilar("1");
      alert("Alquiler realizado.");
    };
  }

  var boton2 = document.getElementById("2alquiler");
  if (boton2 != null) {
    boton2.onclick = function () {
      AlquilerService.alquilar("2");
      alert("Alquiler realizado.");
    };
  }

  var boton3 = document.getElementById("3alquiler");
  if (boton3 != null) {
    boton3.onclick = function () {
      AlquilerService.alquilar("3");
      alert("Alquiler realizado.");
    };
  }

  var boton4 = document.getElementById("4alquiler");
  if (boton4 != null) {
    boton4.onclick = function () {
      AlquilerService.alquilar("4");
      alert("Alquiler realizado.");
    };
  }

  var boton5 = document.getElementById("5alquiler");
  if (boton5 != null) {
    boton5.onclick = function () {
      AlquilerService.alquilar("5");
      alert("Alquiler realizado.");
    };
  }
}

export function mostrarlibro(lista) {
  const place = document.getElementById("tbody2"); 
  const element = document.createElement("tr");

  place.removeChild(place.firstChild);


  element.innerHTML = `                                     
        <th id="filalibrosearchbook" scope="row">${lista.isbn}</th>
        <td id="filalibrosearchbook">${lista.titulo}</td>
        <td id="filalibrosearchbook">${lista.autor}</td>
        <td id="filalibrosearchbook">${lista.stock}</td>
        <td id="filalibrosearchbook"><img id="imagen2" src="${lista.imagen}"></td>
        `;
  place.appendChild(element);
}

export function SearchByForm() {
  var tituloautor = document.getElementById("tituloautor").value;

  getlibrosbyinput(tituloautor);
}
