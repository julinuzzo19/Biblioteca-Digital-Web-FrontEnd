class Libros
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


function getlibros()    
{  
    fetch(`https://localhost:44366/api/Libros`)
    .then(response => response.json())
    .then(lista => {mostrardatos(lista);})
}
    
function mostrardatos(lista)
{
    for(let i of lista)
    {
        var fila=i;
        if(fila.stock>0)
        {      
            const place=document.getElementById("tbody");
            const element = document.createElement("tr");
            element.innerHTML = 
            `                                     
            <th id="filalibro" scope="row">${fila.isbn}</th>
              <td id="filalibro">${fila.titulo}</td>
              <td id="filalibro">${fila.autor}</td>
              <td id="filalibro">${fila.stock}</td>
              <td><img id="imagen" src="${fila.imagen}"></td>
            
            `
            place.appendChild(element);
        }
    }
}

getlibros();










// addProduct(product) {
//     const productList = document.getElementById("product-list");
//     const element = document.createElement("div");
//     element.innerHTML = `
//             <div class="card text-center mb-4">
//                 <div class="card-body">
//                     <strong>Product</strong>: ${product.name} -
//                     <strong>Price</strong>: ${product.price} - 
//                     <strong>Year</strong>: ${product.year}
//                     <a href="#" class="btn btn-danger" name="delete">Delete</a>
//                 </div>
//             </div>
//         `;
//     productList.appendChild(element);
//   }