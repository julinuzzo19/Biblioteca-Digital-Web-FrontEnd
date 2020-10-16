
import * as Service from "./LibroService.js";



export function mostrardatos(lista)
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

Service.getlibros();


export function mostrarlibro(lista)
{   
    
        const place=document.getElementById("tbody2");
        const element = document.createElement("tr");
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


function Bienvenidacliente(cliente)
{
    const place=document.getElementById("h3title");
    const element = document.createElement("h3");
    element.innerHTML=
    `    
   <p> Bienvenido</p>
   <p id="titlecliente"> ${cliente.nombre}!</p>
    `
    place.appendChild(element);
    
}

function getCliente()    
{  
    fetch(`https://localhost:44366/api/Clientes/1`)
    .then(response => response.json())
    .then(cliente => {Bienvenidacliente(cliente);})
} 



window.onload= function()
{
    getCliente();

    /* const elem=document.getElementById("formsearchbook").addEventListener("submit",function(e){
        e.preventDefault();
    var autor=document.getElementById("autor").value;
    var titulo=document.getElementById("titulo").value;
    
    getlibrosbyinput(autor,titulo);
    
    }) */



}

window.onsubmit=function(e)
{
    e.preventDefault();
    var autor=document.getElementById("autor").value;
    var titulo=document.getElementById("titulo").value;
    
    Service.getlibrosbyinput(autor,titulo);

}







