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


export var alq= function(isbn){

    var alquiler=new constants.Alquiler(1,isbn,"string","16/10/2020");
    var alquilerjson=JSON.stringify(alquiler);
   
    PostAlquiler(alquilerjson);}
