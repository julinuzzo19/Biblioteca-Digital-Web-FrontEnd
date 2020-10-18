
import * as LibroService from "./LibroService.js";
import * as ClienteService from "./ClienteService.js";
import * as AlquilerService from "./AlquilerService.js";
import * as Constants from "./Constants.js"

window.onload = () =>{

    LibroService.getlibros();
    ClienteService.getCliente();   
}

window.onsubmit=(event1) =>
{ 
    event1.preventDefault();  
    LibroService.SearchByForm();
    
}


  


