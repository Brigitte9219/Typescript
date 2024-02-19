//Función anónima autoinvocada
(function(){

    //Desestructuración de objetos

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan América',
        poder: 'Droga'
    }

    console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);

    //------------------//

    const { nombre, clave, poder } = avenger;

    console.log(nombre);
    console.log(clave);
    console.log(poder);

    //------------------//

    const extraer = ({nombre, poder}:any) => {
        console.log(nombre);
        console.log(poder);
    }
    extraer(avenger);

    //------------------//

    //Desestructuración de arreglos

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];
    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);

    const [uno, dos, tres] = avengers;
    console.log(uno);
    console.log(dos);
    console.log(tres);

    const extraerArray = ( [thor, ironman, spiderman]: string[])  => {
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    }

    extraerArray(avengers);


})();


