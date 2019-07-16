let codificar =() => {
    const string = document.getElementById("texto").value;
    const offset = parseInt(document.getElementById("offset").value);
    document.getElementById('mensajeSecreto').innerHTML = window.cipher.codificar(offset,string);
    document.getElementById('enco1').innerHTML =window.cipher.decodificar(offset,string);
  
  };
  
  let decodificar =() => {
    const string = document.getElementById("texto").value;
    const offset = parseInt(document.getElementById("offset").value);
    document.getElementById('mensajeSecreto').innerHTML =window.cipher.decodificar(offset,string);
    document.getElementById('enco1').innerHTML =window.cipher.decodificar(offset,string);
  };
  
  //let demoVisibility =() => {
  //  document.getElementById("enco").style.visibility = "hidden";
  //};
  
  
  let limpiar =() => {
  document.getElementById("espacioMensaje").reset();
  document.getElementById("clave").reset();
  document.getElementById("mensajeSecreto").innerHTML= "";
  //demoVisibility();
  };
  
  //let limpiar = () => {
  //  clear();
  //  demoVisibility();
  //}
  
  document.getElementById("codificar").addEventListener('click', codificar);
  document.getElementById("decodificar").addEventListener('click', decodificar);
  document.getElementById("limpiar").addEventListener('click', limpiar);