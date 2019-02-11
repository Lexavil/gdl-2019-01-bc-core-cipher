
     
        // bucle
        for(var i=0, c; c=array_de_caracteres[i]; i++){

            c = String.fromCharCode( parseInt( c ) );

            var caracter_actual = "",
                indice_actual = alfabeto.indexOf( c );
  if((indice_actual - offset) >= 0){
                caracter_actual = alfabeto[ (indice_actual - offset) ];

                resultado += caracter_actual;
            }
            else{
                var indice_actual_temporal = indice_actual - offset,
                    sobrante = parseInt(indice_actual_temporal.toString().replace('-', '') );


                caracter_actual = alfabeto[alfabeto.length - sobrante];

                resultado += caracter_actual;)