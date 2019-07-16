window.cipher = {
  codificar: (offset, string) => {
  let salida = '';
  let oldAscii;
  let newAscii;
  let stringM = string.toUpperCase();
  for (let i = 0; i < stringM.length; i++) {
     oldAscii=stringM[i].charCodeAt();
     if(oldAscii === 32){
       newAscii = 32;
     }
      else {
       newAscii = (oldAscii - 65 + offset) % 26 + 65;
     }
      salida = salida.concat(String.fromCharCode(newAscii));
      
  }
    return salida;
  },
  
    decodificar: (offset, string) => {
    let salida = '';
    let oldAscII;
    let newAscII;
    let stringM = string.toUpperCase();
    for (let i = 0; i<stringM.length; i++){
       oldAscII = stringM[i].charCodeAt();
       if(oldAscII === 32){
         newAscII = 32;
       }
        else {
          newAscII = (oldAscII + 65 - offset) % 26 + 65;
        }
        salida = salida.concat(String.fromCharCode(newAscII));
        
    }
     return salida;
  }
  };