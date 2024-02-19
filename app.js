"use strict";
//Función anónima autoinvocada
(function () {
    //Desestructuración de objetos
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitan América',
        poder: 'Droga'
    };
    console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);
    //------------------//
    var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
    console.log(nombre);
    console.log(clave);
    console.log(poder);
    //------------------//
    var extraer = function (_a) {
        var nombre = _a.nombre, poder = _a.poder;
        console.log(nombre);
        console.log(poder);
    };
    extraer(avenger);
    //------------------//
    //Desestructuración de arreglos
    var avengers = ['Thor', 'Ironman', 'Spiderman'];
    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);
    var uno = avengers[0], dos = avengers[1], tres = avengers[2];
    console.log(uno);
    console.log(dos);
    console.log(tres);
    var extraerArray = function (_a) {
        var thor = _a[0], ironman = _a[1], spiderman = _a[2];
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    };
    extraerArray(avengers);
})();
