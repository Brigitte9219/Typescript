//Función anónima autoinvocada
(function(){

    function getEdad(){
        return 100 + 100 + 300;
    }
    
    const nombre = 'Brigitte';
    const apellido = 'Padilla';
    const edad = 31;

    //Brigitte Padilla (Edad: 31)

    //const salida = nombre + apellido + edad;
    //const salida = nombre + " " + apellido + " ( " + edad + " ) ";
    const salida = `${nombre} ${apellido} (Edad: ${edad})
    ( ${getEdad()})`;

    console.log(salida);

})


