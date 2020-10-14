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

function getlibrosbyinput(autor,titulo)    
{  
    fetch(`https://localhost:44366/api/Libros`)
    .then(response => response.json())
    .then(lista => {
        
        for(let i of lista)
        {
            if(autor==i.autor || titulo==i.titulo)
                {mostrarlibro(i);}
            
        }     
}) }



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


function mostrarlibro(lista)
{   
    
        const place=document.getElementById("tbody2");
        const element = document.createElement("tr");
        var elem=0;
        element.innerHTML = 
        `                                     
        <th id="filalibro" scope="row">${lista.isbn}</th>
        <td id="filalibro">${lista.titulo}</td>
        <td id="filalibro">${lista.autor}</td>
        <td id="filalibro">${lista.stock}</td>
        <td><img id="imagen2" src="${lista.imagen}"></td>
        
        `
        place.appendChild(element);
             
}











const ele=document.getElementById("formsearchbook").addEventListener("submit",function(e){
    e.preventDefault();
var autor=document.getElementById("autor").value;
var titulo=document.getElementById("titulo").value;

getlibrosbyinput(autor,titulo);

})






