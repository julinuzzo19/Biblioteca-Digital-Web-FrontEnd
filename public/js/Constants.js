
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
    constructor(id,nombre,apellido,dni,email)
    {
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.email=email
    }

}