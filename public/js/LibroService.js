import * as Constants from "./Constants.js";
import * as AlquilerService from "./AlquilerService.js";

export function getlibros() {
  fetch(`https://localhost:44366/api/Libros`)
    .then((response) => response.json())
    .then((lista) => {
      mostrardatos(lista);
    });
}

export async function getlibrosbyinput(tituloautor) {
  let regex = /\w[tituloautor]+/;
  let libros = [];

  await fetch(Constants.URL_API_LIBROS + `?titulo=${tituloautor}`)
    .then((response) => response.json())
    .then((lista) => {
      for (let i of lista) {
        if (regex.test(i.titulo)) {
          libros.push(i);
        }
      }
    });

  await fetch(Constants.URL_API_LIBROS + `?autor=${tituloautor}`)
    .then((response) => response.json())
    .then((lista) => {
      for (let i of lista) {
        if (regex.test(i.autor)) {
          libros.push(i);
        }
      }
    });

  mostrarlibro(libros);
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
              <td class="filalibroindex">${fila.editorial}</td>
              <td class="filalibroindex"><img id="imagen" src="${fila.imagen}"></td>
           <td class="filalibroindex"> <input type="button" id="${fila.isbn}" class="btn btn-lg btn-primary " value="Alquilar"></input>
            <input type="button" id="${fila.isbn}"  class="btn btn-secondary btn-lg " value="Reservar"></input> </td>`;

      if (place != null) {
        place.appendChild(element);
      }
    }
  }
}

export function mostrarlibro(lista) {
  const place = document.getElementById("tbody2");

  while (place.hasChildNodes()) {
    place.removeChild(place.firstChild);
  }

  for (const item of lista) {
    const element = document.createElement("tr");

    element.innerHTML = `                                     
  <th id="filalibrosearchbook" scope="row">${item.isbn}</th>
  <td id="filalibrosearchbook">${item.titulo}</td>
  <td id="filalibrosearchbook">${item.autor}</td>
  <td id="filalibrosearchbook">${item.editorial}</td>
  <td id="filalibrosearchbook"><img id="imagen2" src="${item.imagen}"></td>
  `;
    place.appendChild(element);
  }
}

export function SearchByForm() {
  var tituloautor = document.getElementById("tituloautor").value;

  getlibrosbyinput(tituloautor);
}

document.addEventListener("click", (e) => {
  if (e.target.value === "Reservar") {
    AlquilerService.reservar(e.target.id);
    alert("Reserva realizada.");
  }
  if (e.target.value == "Alquilar") {
    AlquilerService.alquilar(e.target.id);
    alert("Alquiler realizado.");
  }
});
