

export function Bienvenidacliente(cliente)
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

export function getCliente()    
{  
    fetch(`https://localhost:44366/api/Clientes/1`)
    .then(response => response.json())
    .then(cliente => {Bienvenidacliente(cliente);})
} 
