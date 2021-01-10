import * as constants from "./Constants.js";

export function PostAlquiler(alquilerjson) {
  fetch(constants.URL_API_ALQUILERES, {
    method: "POST",
    body: alquilerjson,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}

export function GetAlquiler(clienteid) {
  fetch(constants.URL_API_ALQUILERES_CLIENTES + clienteid, {})
    .then((response) => response.json())
    .then((data) => {
      MostrarAlquileres(data);
    });
}

export function MostrarAlquileres(lista) {
  for (let i of lista) {
    if (i.fechaReserva == "") {
      const place = document.getElementById("articles-reservas");
      const element = document.createElement("div");
      var fila = i;

      var fechaalquiler = fila.fechaAlquiler.substring(0, 10);
      var fechadevolucion = fila.fechaDevolucion.substring(0, 10);

      element.innerHTML = `                                     
     <div class="row">
     <div class="col-6">
      <article class="article-item-order">
     <div class="image-space"> <img class="image-libro" src="${i.imagen}" alt=""></div>
      <h2>${i.titulo}</h2>
      <h4>${fechadevolucion}</h4>
      <h5>${fechaalquiler}</h5>
      </articles> 
      </div>
      </div>
        `;

      if (place != null) {
        place.appendChild(element);
      }
    } else {
      const place = document.getElementById("articles-alquileres");
      const element = document.createElement("div");
      var fila = i;
      var fechareserva = fila.fechaReserva.substring(0, 10);

      element.innerHTML = ` 
      <div class="row">
      <div class="col-6">                                    
      <article class="article-item-order">
      <div class="image-space"> <img class="image-libro" src="${i.imagen}" alt=""></div>
      <h2>${i.titulo}</h2>
      <h4>${fechareserva}</h4>
      </articles>  
      </div> 
      </div>
            `;
      if (place != null) {
        place.appendChild(element);
      }
    }
  }
}

export var alquilar = function (isbn) {
  var fechaalquiler = new Date();
  fechaalquiler =
    fechaalquiler.getDate() +
    "/" +
    (fechaalquiler.getMonth() + 1) +
    "/" +
    fechaalquiler.getFullYear();

  var fecha = String(fechaalquiler);

  var alquiler = new constants.Alquiler(1, isbn, "", fecha);
  var alquilerjson = JSON.stringify(alquiler);

  PostAlquiler(alquilerjson);
};

export var reservar = function (isbn) {
  var fechareserva = new Date();

  fechareserva =
    fechareserva.getDate() +
    "/" +
    (fechareserva.getMonth() + 1) +
    "/" +
    fechareserva.getFullYear();

  var fecha = String(fechareserva);

  var reserva = new constants.Alquiler(1, isbn, fecha, "");
  var reservajson = JSON.stringify(reserva);

  PostAlquiler(reservajson);
};
