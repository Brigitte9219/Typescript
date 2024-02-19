//Función anónima autoinvocada
(function(){

    //Promesas y su tipado en Typescript

    const retirarDinero = (montoRetirar: number): Promise<number> => {

        let dineroActual = 1000;

        return new Promise( (resolve, reject) => {

            if (montoRetirar > 1000){
                reject('No hay suficientes fondos');
            }else{
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }

        })

    }

    retirarDinero(500)
    .then(montoActual => console.log(`Me queda ${montoActual}`))
    .catch(err => console.warn(err));





    

})();
