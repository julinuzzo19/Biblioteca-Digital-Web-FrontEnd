export const URL_API = "https://localhost:44366/api/";
export const URL_API_CLIENTES = URL_API + "Clientes/";
export const URL_API_ALQUILERES = URL_API + "Alquileres";
export const URL_API_ALQUILERES_CLIENTES = URL_API_ALQUILERES + "/cliente/";
export const URL_API_LIBROS = URL_API + "Libros";

export class Libro {
  constructor(isbn, titulo, autor, editorial, imagen, stock) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.editorial = editorial;
    this.imagen = imagen;
    this.stock = stock;
  }
}
export class Cliente {
  constructor(nombre, apellido, dni, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.email = email;
  }
}

export class Alquiler {
  constructor(clienteId, isbn, fechareserva, fechaalquiler) {
    this.clienteId = clienteId;
    this.isbn = isbn;
    this.fechareserva = fechareserva;
    this.fechaalquiler = fechaalquiler;
  }
}
