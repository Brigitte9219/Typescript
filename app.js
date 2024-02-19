"use strict";
//Función anónima autoinvocada
(function () {
    //Tipado de retorno de una función
    const sumar = (a, b) => {
        return a + b;
    };
    console.log(sumar(2, 3));
    //-----------------------//
    const nombre = () => {
        return 'Hola fernando';
    };
    console.log(nombre());
    //-----------------------//
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve('Fernando');
        });
    };
    obtenerSalario()
        .then(a => console.log(a.toUpperCase()));
})();
