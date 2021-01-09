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
    if (i.stock > 0) {
      const place = document.getElementById("articles");
      const element = document.createElement("div");
      var fila = i;

      element.innerHTML = `                                     
      <article class="article-item">
      <div class="image-space"> <img class="image-libro" src="${fila.imagen}" alt=""></div>
      <h2>${fila.titulo}</h2>
      <h4>${fila.autor}</h4>
      <h5>${fila.editorial}</h5>

      <input type="button" id="${fila.isbn}" name="btnalquiler" class="btn" value="Alquilar"></input>
     <br> </br>
      <input type="button" id="${fila.isbn}"  class="btn" name="btnreserva" value="Reservar"></input> `;


      if (place != null) {
        place.appendChild(element);
      }
      if (fila.stock < 1) {
        var btnreserva = (document.querySelector(
          'input[name="btnreserva"]'
        ).disabled = true);
        var btnalquiler = (document.querySelector(
          'input[name="btnalquiler"]'
        ).disabled = true);
      }
    }
  }
}

export function mostrarlibro(lista) {
  const place = document.getElementById("articles");

  while (place.hasChildNodes()) {
    place.removeChild(place.firstChild);
  }

  for (const item of lista) {
    const element = document.createElement("div");

    element.innerHTML = `                                     
    <article class="article-item">
    <div class="image-space"> <img class="image-libro" src="${item.imagen}" alt=""></div>
    <h2>${item.titulo}</h2>
    <h4>${item.autor}</h4>
    <h5>${item.editorial}</h5>

    <input type="button" id="${item.isbn}" name="btnalquiler" class="btn   " value="Alquilar"></input>
   <br> </br>
    <input type="button" id="${item.isbn}"  class="btn " name="btnreserva" value="Reservar"></input> `;
    place.appendChild(element);
    if (item.stock < 1) {
      var btnreserva = (document.querySelector(
        'input[name="btnreserva"]'
      ).disabled = true);
      var btnalquiler = (document.querySelector(
        'input[name="btnalquiler"]'
      ).disabled = true);
    }
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
