import * as Constants from "./Constants.js";
import * as AlquilerService from "./AlquilerService.js";

export function getlibros() {
  fetch(`https://localhost:44366/api/Libros`)
    .then((response) => response.json())
    .then((lista) => {
      mostrardatos(lista);
    });
}

export async function getlibrosbyinput(tituloautor, check) {
  let regex = /\w[tituloautor]+/;
  let libros = [];

  var URL_GET = Constants.URL_API_LIBROS;

  if (check == "titulo") {
    URL_GET = URL_GET + `?titulo=${tituloautor}`;
  } else {
    URL_GET = URL_GET + `?autor=${tituloautor}`;
  }

  await fetch(URL_GET)
    .then((response) => response.json())
    .then((lista) => {
      for (let i of lista) {
        if (regex.test(i.titulo) || regex.test(i.autor)) {
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
              <td class="filalibroindex"><img id="imagen" src="${fila.imagen}" onerror="this.src='../images/defaultbook.jfif'"></td>
           <td class="filalibroindex"> <input type="button" id="${fila.isbn}" class="btn btn-lg btn-primary " value="Alquilar"></input>
            <input type="button" id="${fila.isbn}"  class="btn btn-secondary btn-lg " value="Reservar"></input> </td>`;

      if (place != null) {
        place.appendChild(element);
      }
    }
  }
}

export function mostrarlibro(lista) {
  const place = document.getElementById("tbody");

  while (place.hasChildNodes()) {
    place.removeChild(place.firstChild);
  }

  for (const item of lista) {
    const element = document.createElement("tr");

    element.innerHTML = `                                     
  <th class="filalibroindex" scope="row">${item.isbn}</th>
  <td class="filalibroindex">${item.titulo}</td>
  <td class="filalibroindex">${item.autor}</td>
  <td class="filalibroindex">${item.editorial}</td>
  <td class="filalibroindex"><img id="imagen" src="${item.imagen}" onerror="this.src='../images/defaultbook.jfif'"></td>
  <td class="filalibroindex"> <input type="button" id="${item.isbn}" class="btn btn-lg btn-primary " value="Alquilar"></input>
  <input type="button" id="${item.isbn}"  class="btn btn-secondary btn-lg " value="Reservar"></input> </td>
  `;
    place.appendChild(element);
  }
}

export function SearchByForm() {
  let tituloautor = document.getElementById("tituloautor").value;

  var checkbox = document.getElementsByName("optradio");

  var check;
  if (checkbox[0].checked) {
    check = checkbox[0].value;
  } else {
    check = checkbox[1].value;
  }

  getlibrosbyinput(tituloautor, check);
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
