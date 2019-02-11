
    const xyz = () =>{ //se obtiene el numero de posiciones

         const string = document.getElementById("input").value; //Nos retorna un valor el cual es el resultado de texto codificado
         const offset = parseInt(document.getElementById("offsetDiv").value); //texto ingresado
        //obtiene el texto ingresado
       
        
       window.cipher.encode(string, offset);
         document.getElementById("stringencode").value= window.cipher.encode(offset, string);
    };
    const textoEncode= document.getElementById("input"); //Genera el texto codificado
    textoEncode.addEventListener("buttonEncode", xyz);
    
    const abc = () =>{  //genera el numero de posiciones
       
        const offset = parseInt(document.getElementById("numero").value); //genera el texto ingresado
        
        const string = document.getElementById("strindecode").value; //retornar el resultado del texto decodificado
        
        let mensajeFinal= window.cipher.decode(offset, string);
         document.getElementById("stringdecode").value= mensajeFinal; //Nos retorna el mensaje codificado o decodificado segun sea la eleccion del usuario.
    };
    const textoDecode= document.getElementById("decode"); //Genera el texto decodificado
    textoDecode.addEventListener("buttonDecode", abc);