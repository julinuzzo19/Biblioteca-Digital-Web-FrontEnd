
import * as AlquilerService from "./AlquilerService.js";
import * as main from "./main.js";

export function getlibros()    
{  
    fetch(`https://localhost:44366/api/Libros`)
    .then(response => response.json())
    .then(lista => {mostrardatos(lista);})
} 

export function getlibrosbyinput(autor,titulo)    
{  
    fetch(`https://localhost:44366/api/Libros`)
    .then(response => response.json())
    .then(lista => {
        
        for(let i of lista)
        {
            if(autor==i.autor || titulo==i.titulo)
                {mostrarlibro(i);}        
        }
}) 
}

export function mostrardatos(lista)
{
    for(let i of lista)
    {        
        
        const place=document.getElementById("tbody");
        const element = document.createElement("tr");
        var fila=i;
        if(fila.stock>0)
        {              
            element.innerHTML = 
            `                                     
            <th class="filalibroindex" scope="row">${fila.isbn}</th>
              <td class="filalibroindex">${fila.titulo}</td>
              <td class="filalibroindex">${fila.autor}</td>
              <td class="filalibroindex">${fila.stock}</td>
              <td><img id="imagen" src="${fila.imagen}"></td>
              <input type="button" id="btnalquilar${fila.isbn}"   class="btn btn-lg btn-primary" value="Alquilar"></input>
              <input type="button" id="btnreservar" onclick="alert('Reservado');"  class="btn btn-secondary btn-lg" value="Reservar"></input> 
            `
            place.appendChild(element);      
        }    
    }
        

    var boton=document.getElementById("btnalquilar1");
    
        boton.onclick=function()
           {
               alert(boton.id);             
           }
    var boton2=document.getElementById("btnalquilar2");
    
        boton2.onclick=function()
           {
               alert(boton2.id);             
           }
    var boton3=document.getElementById("btnalquilar3");

    boton3.onclick=function()
        {
            alert(boton3.id);             
        }
    var boton4=document.getElementById("btnalquilar4");
    
        boton4.onclick=function()
            {
                alert(boton4.id);             
            }
    var boton5=document.getElementById("btnalquilar5");

    boton5.onclick=function()
        {
            alert(boton5.id);             
        }
   

}

export function mostrarlibro(lista)
{      
       const place=document.getElementById("tbody2");
        const element = document.createElement("tr");
        element.innerHTML = 
        `                                     
        <th id="filalibrosearchbook" scope="row">${lista.isbn}</th>
        <td id="filalibrosearchbook">${lista.titulo}</td>
        <td id="filalibrosearchbook">${lista.autor}</td>
        <td id="filalibrosearchbook">${lista.stock}</td>
        <td><img id="imagen2" src="${lista.imagen}"></td>
        
        `
        place.appendChild(element);        
}

export function SearchByForm()
{
    var autor=document.getElementById("autor").value;
    var titulo=document.getElementById("titulo").value;
    
    getlibrosbyinput(autor,titulo);

}
