"use strict";
//Función anónima autoinvocada
(function () {
    function saludar(nombre) {
        console.table('Hola ' + nombre); // Hola Logan
    }
    const wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
});
