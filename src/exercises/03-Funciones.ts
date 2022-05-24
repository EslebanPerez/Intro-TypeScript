/*
    ===== Código de TypeScript =====
    ===== Funciones básicas =====
*/

function sumar (a: number, b: number):number{
    return a + b;
}

const sumarFlecha = (a:number , b:number):number => {
    return a + b;
}
const resultado = sumar(10, 20);
console.log(resultado);

function multiplicar(numero: number, otroNumero?: number, base: number =2):number{
    return numero * base;
}

const resultadoMultiplicar = multiplicar(5, 0, 10);
console.log(resultadoMultiplicar);





interface PersonajeDisney{
    nombre: string;
    pv: number;
    mostrarPV: () => void; // Definición de funciones
}

function curar(personaje:PersonajeDisney, curarX:number): void{
    personaje.pv += curarX;
    console.log(personaje); 
}

const nuevoPersonaje: PersonajeDisney = {
    nombre : "Mickey",
    pv: 50,
    mostrarPV(){
        console.log(`Puntos de vida ${this.pv}`);
    }
}

curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarPV();
