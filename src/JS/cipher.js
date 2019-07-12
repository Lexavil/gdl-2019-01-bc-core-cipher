window.cipher = {
                   
  resultado:'',
  offset: 0,

    decode: (string, offset) => { //metodo para decodificar
        let resultado = "";
       
        for (let i = 0; i < string.length; i++) { //Se avienta el paseo por toda la longituD del string
          if(string[i] === " "){ //Si hay un espacio, dejalo igual :B
            resultado += " ";
                }else{
                    let x = string [i];
                    string = string.toUpperCase();
                    let seguridad = (seguridad.charCodeAt(i) + 65 - offset) % 26 + 65; //Formula magica
                  
                    resultado += (string.formCharCode(x));
                          }
                      }
                    return resultado; //Nos retorna el resultado codificado
          }
};       