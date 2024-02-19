"use strict";
//Función anónima autoinvocada
(function () {
    //Funciones de flecha
    var miFuncion = function (a) {
        return a;
    };
    //--------------------//
    var miFuncionN = function (a) {
        return a.toUpperCase();
    };
    var miFuncionF = function (a) { return a.toUpperCase(); };
    console.log(miFuncionN('Normal'));
    console.log(miFuncionF('Flecha'));
    //--------------------//
    var sumarN = function (a, b) {
        return a + b;
    };
    var sumarF = function (a, b) { return a + b; };
    console.log(sumarN(2, 3));
    console.log(sumarF(3, 3));
    //--------------------//
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log("".concat(_this.nombre, " smash!!!"));
            }, 1000);
        }
    };
    hulk.smash();
})();
