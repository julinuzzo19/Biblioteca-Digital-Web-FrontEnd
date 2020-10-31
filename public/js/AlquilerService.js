import * as constants from "./Constants.js"



export function PostAlquiler(alquilerjson)
{
    fetch('https://localhost:44366/api/Alquileres', {
        method: 'POST',
        body: alquilerjson,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'}
     }).then(response => response.json()).then(data => {
        console.log(data);
      }).catch(err=>console.log(err))

}

export function GetAlquiler(clienteid)
{
    fetch(`https://localhost:44366/api/Alquileres/cliente/${clienteid}`, {    
     }).then(response => response.json()).then(data => {
        console.log(data);
        MostrarAlquileres(data);
      })
}


export function MostrarAlquileres(lista)
{
    for(let i of lista)
    {        
        if(i.fechaReserva=="")
        {
        
        const place=document.getElementById("tbodyalquiler");
        const element = document.createElement("tr");
        var fila=i;
           
        element.innerHTML = 
        `                                     
        <th class="filalibroordersalquiler" scope="row">${fila.libroISBN}</th>      
            <td class="filalibroordersalquiler">${fila.titulo}</td>     
            <td class="filalibroordersalquiler">${fila.autor}</td>
            <td class="filalibroordersalquiler">${fila.fechaAlquiler}</td>
            <td class="filalibroordersalquiler">${fila.fechaDevolucion}</td>
               
        `         
            place.appendChild(element);      
        }
        else
        {
            const place=document.getElementById("tbodyreserva");
            const element = document.createElement("tr");
            var fila=i;
               
            element.innerHTML = 
            `                                     
            <th class="filalibroordersreserva" scope="row">${fila.libroISBN}</th>      
                <td class="filalibroordersreserva">${fila.titulo}</td>     
                <td class="filalibroordersreserva">${fila.autor}</td>
                <td class="filalibroordersreserva">${fila.fechaReserva}</td>
                   
            `         
                place.appendChild(element); 
        }
    }

}

export var alquilar= function(isbn)
{
   var fechaalquiler= new Date();
   fechaalquiler=fechaalquiler.getDate()+"/"+(fechaalquiler.getMonth()+1)+"/"+fechaalquiler.getFullYear();

    var fecha=String(fechaalquiler);

   var alquiler=new constants.Alquiler(1,isbn,"",fecha);
    var alquilerjson=JSON.stringify(alquiler);
   
    PostAlquiler(alquilerjson);
}

export var reservar= function(isbn)
{
    var fechareserva=new Date();

   fechareserva=fechareserva.getDate()+"/"+(fechareserva.getMonth()+1)+"/"+fechareserva.getFullYear();
  
   var fecha=String(fechareserva);
    
    var reserva=new constants.Alquiler(1,isbn,fecha,"");
    var reservajson= JSON.stringify(reserva);
     
    PostAlquiler(reservajson);
}