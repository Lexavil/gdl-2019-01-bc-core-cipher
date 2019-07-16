let codificar = () => {
    const string = document.getElementById("texto").value;
    const offset = parseInt(document.getElementById("offset").value);
    document.getElementById('mensajeSecreto').innerHTML = window.cipher.codificar(offset, string);
    document.getElementById('enco1').innerHTML = window.cipher.decodificar(offset, string);

};

let decodificar = () => {
    const string = document.getElementById("texto").value;
    const offset = parseInt(document.getElementById("offset").value);
    document.getElementById('mensajeSecreto').innerHTML = window.cipher.decodificar(offset, string);
    document.getElementById('enco1').innerHTML = window.cipher.decodificar(offset, string);
};



let limpiar = () => {
    document.getElementById("espacioMensaje").reset();
    document.getElementById("clave").reset();
    document.getElementById("mensajeSecreto").innerHTML = "";
    
};


document.getElementById("codificar").addEventListener('click', codificar);
document.getElementById("decodificar").addEventListener('click', decodificar);
document.getElementById("limpiar").addEventListener('click', limpiar);