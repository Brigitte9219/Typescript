//Función anónima autoinvocada
(function(){

    //Clases y constructores
    
class Avenger {
    //nombre:string='sin nombre';
    //equipo:string;
    //nombreReal:string;
    //puedePelear:boolean;
    //peleasGanadas:number;

    constructor(public nombre:string,
                public equipo:string,
                public nombreReal?:string,
                public puedePelear:boolean = true,
                public peleasGanadas:number = 0){}
}

const antman = new Avenger ('Antman','Capi');

console.log(antman);

})();
