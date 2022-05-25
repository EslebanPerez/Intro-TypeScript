/*
    ===== Código de TypeScript =====
    ===== Destructuración de objetos =====
*/

interface Reproductor{
    volumen : number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}
const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Cure for me",
    detalles: {
        autor: "Aurora",
        anio: 2021
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;

console.log("El volumen actual de: ", volumen);
console.log("El segundo actual de: ", segundo);
console.log("La canción actual de: ", cancion);
console.log("El autor es: ", autor);