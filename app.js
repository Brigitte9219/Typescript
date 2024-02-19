//Función anónima autoinvocada
(function () {
    function getEdad() {
        return 100 + 100 + 300;
    }
    var nombre = 'Brigitte';
    var apellido = 'Padilla';
    var edad = 31;
    //Brigitte Padilla (Edad: 31)
    //const salida = nombre + apellido + edad;
    //const salida = nombre + " " + apellido + " ( " + edad + " ) ";
    var salida = "".concat(nombre, " ").concat(apellido, " (Edad: ").concat(edad, ")\n    ( ").concat(getEdad(), ")");
    console.log(salida);
});
