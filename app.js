"use strict";
//Función anónima autoinvocada
(function () {
    //Promesas: resolve para ok, reject para error
    console.log('Inicio');
    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Se terminó el timeout');
        }, 1000);
    });
    prom1
        .then(mensaje => console.log(mensaje))
        .catch(error => console.warn(error));
    console.log('Fin');
})();
