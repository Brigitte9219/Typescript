//Función anónima autoinvocada
(function(){

    //Tipado de retorno de una función
    const sumar = (a:number, b:number): number => {
     return a + b;
    }

    console.log(sumar(2,3));

    //-----------------------//

    const nombre = ():string => {
        return 'Hola fernando';
    }

    console.log(nombre());

    //-----------------------//

    const obtenerSalario = ():Promise<string> => {
        return new Promise( (resolve, reject) => {
        resolve('Fernando');
        })
    }

    obtenerSalario()
    .then(a => console.log(a.toUpperCase()))

})();
