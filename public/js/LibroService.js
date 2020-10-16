import {Libro} from "./Constants.js"
import * as main from "./main.js";

export function getlibros()    
{  
    fetch(`https://localhost:44366/api/Libros`)
    .then(response => response.json())
    .then(lista => {main.mostrardatos(lista);})
} 

export function getlibrosbyinput(autor,titulo)    
{  
    fetch(`https://localhost:44366/api/Libros`)
    .then(response => response.json())
    .then(lista => {
        
        for(let i of lista)
        {
            if(autor==i.autor || titulo==i.titulo)
                {main.mostrarlibro(i);}
            
        }
}) }
