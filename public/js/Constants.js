
export class Libro
{
    constructor(isbn,titulo,autor,editorial,imagen,stock)
    {
        this.isbn=isbn;
        this.titulo=titulo;
        this.autor=autor;
        this.editorial=editorial;
        this.imagen=imagen;
        this.stock=stock;
    }
}
export class Cliente
{
    constructor(nombre,apellido,dni,email)
    {
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.email=email
    }

}
export class Alquiler
{
    constructor(clienteId,isbn,fechareserva,fechaalquiler)
    {
        this.clienteId=clienteId;
        this.isbn=isbn;
        this.fechareserva=fechareserva;
        this.fechaalquiler=fechaalquiler;
    }

}