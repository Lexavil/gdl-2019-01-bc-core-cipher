window.encode = {

    encode: (string, offset) => { //metodo para decodificar
        let stringencode = "";
       
        for (let i = 0; i < string.length; i++) { //Se avienta el paseo por toda la longituD del string
          if(string[i] === " "){ //Si hay un espacio, dejalo igual :B
            stringencode += " ";
                }else{
                    let xyz = (string.charCodeAt(i) + 65 - offset) % 26 + 65; //Formula magica
                    stringencode += (string.formCharCode(xyz));
                          }
                      }
                    return stringencode; //Nos retorna el resultado codificado
          }
           };