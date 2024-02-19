//Función anónima autoinvocada
(function(){

    //Funciones de flecha

    const miFuncion = function(a:string){
        return a;
    }

    //--------------------//

    const miFuncionN = (a:string) => {
        return a.toUpperCase();
    }
    
    const miFuncionF = (a:string) => a.toUpperCase();

    console.log(miFuncionN('Normal'));
    console.log(miFuncionF('Flecha'));

    //--------------------//

    const sumarN = function(a:number, b:number) {
        return a + b;
    }

    const sumarF = (a:number, b:number) => a + b;

    console.log(sumarN(2,3));
    console.log(sumarF(3,3));

    //--------------------//

    const hulk = {
        nombre: 'Hulk',
        smash(){
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 1000);
        }
    }

    hulk.smash();



})();


