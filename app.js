"use strict";
//Función anónima autoinvocada
(function () {
    //Parámetros obligatorios, opcionales y por defecto
    function activar(quien, momento, objeto = 'batiseñal') {
        //console.log(`${quien} activó la ${objeto}`);
        if (momento) {
            console.log(`${quien} activo la ${objeto} en la ${momento}.`);
        }
        else {
            console.log(`${quien} activo la ${objeto}.`);
        }
    }
    activar('Gordon', 'tarde');
})();
