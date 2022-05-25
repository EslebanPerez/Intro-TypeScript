/*
    ===== Código de TypeScript =====
    ===== Destructuración de arreglos =====
*/

const disney : string[] = ["Mickey", "Minnie", "Donald"];
const [p1, ,p3] = disney;
console.log("Personaje 1:", p1);
//console.log("Personaje 2:", p2);
console.log("Personaje 3:", p3);