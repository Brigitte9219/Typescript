"use strict";
//Función anónima autoinvocada
(function () {
    //Clases y constructores
    class Avenger {
        //nombre:string='sin nombre';
        //equipo:string;
        //nombreReal:string;
        //puedePelear:boolean;
        //peleasGanadas:number;
        constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Antman', 'Capi');
    console.log(antman);
})();
