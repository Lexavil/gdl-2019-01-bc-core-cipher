window.cipher = {
                   
    decode: (string, offset) => { //metodo para codificar
      let stringdecode = "";
     
      for (let i = 0; i < string.length; i++) { //Hace el recorrido por toda la longitus del string
        if(string[i] === " "){ //Si hay un espacio, dejarlo igual
          stringdecode += " ";
              }else{
                  let abc = (string.charCodeAt(i) + 65 - offset) % 26 + 65; //Formula magica
                  stringdecode += (string.formCharCode(abc));
                        }
                    }
                  return stringdecode ; //Nos retorna el resultado codificado
        }
        
};
