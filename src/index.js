const ABECEDARIO = () =>{    
    const offset = parseInt(document.getElementById("offset").value); //Clave (número) única de desplazamiento
    const string = document.getElementById("contenido").value; // Se inserta el texto que sera codificado
    window.cipher.encode(string, offset);
    document.getElementById("resultadofinal").value= window.cipher.encode(offset, string); //Aquí se imprimira el resultado ya codificado
};
        const textEncode = document.getElementById("buttonEncode"); //boton codificar
        textEncode.addEventListener("click", ABECEDARIO);

const texto = () =>{
    const offset = parseInt(document.getElementById("offset").value);
    const string = document.getElementById("contenido").value;
    let mensajeFinal = window.cipher.decode(offset, string);
    document.getElementById("resultadofinal").value = mensajeFinal;
};
         const textDecode = document.getElementById("buttonDecode"); //boton decodificar
         textDecode.addEventListener("click", texto);

         const mensajecadena = () =>{ //resultado final
            const offset = document.getElementById("offset").value="";
            const string = document.getElementById("contenido").value="";
            let texto = (offset, string);
            document.getElementById("resultadofinal").value = texto;
        };
                 const textLimpia = document.getElementById("limpiar"); //boton limpiador
textLimpia.addEventListener("click", mensajecadena); //borrar el valor registrado