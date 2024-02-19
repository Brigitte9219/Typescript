"use strict";
//Función anónima autoinvocada
(function () {
    const enviarMision = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    };
    const regresarAlCuartel = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    };
    const wolverine = {
        nombre: 'Logan',
        edad: 60
    };
    enviarMision(wolverine);
    regresarAlCuartel(wolverine);
})();
