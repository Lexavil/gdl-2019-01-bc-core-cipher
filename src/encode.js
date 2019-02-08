var abcalfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    offset = 3, 
function encode(input, output, offset) {
    var resultado = '';
    //bucle
    for (var i = 0, c; c = input[i]; i++) {
        //formula
        var caracter_actual = '', indice_actual = alfabeto.indexOf(c);
        if ((indice_actual + offset) <= alfabeto.length) {
            //Desaplazamos el caracter.
            caracter_actual = alfabeto[(indice_actual + offset)];
            //Convierte a ASCII
            caracter_actual = caracter_actual.charCodeAt(0);
            //guion delimita cada caracter cifrado y poder decifrarlo.
            resultado += caracter_actual + '-';
        }
        else {
            var indice_actual_temporal = indice_actual + offset, sobrante = indice_actual_temporal - alfabeto.length;
            //
            // desplazamiento para reemplazar el caracter.
            caracter_actual = alfabeto[sobrante];
            //Convierte a ASCII
            caracter_actual = caracter_actual.charCodeAt(0);
            resultado += caracter_actual + '-';
        }
    }
    output.value = resultado.replace(/\-$/, '');
}
