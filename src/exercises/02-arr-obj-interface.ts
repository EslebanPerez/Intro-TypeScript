

console.log('Hola Mundo!!!');
/*
    ===== Código de TypeScript =====
*/

let habilidades: (string | number | boolean)[] = ["Bash", "Counter", "Healing", 1];

habilidades.push(2);
habilidades.push(true)

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: "Strider",
    hp: 100,
    habilidades: ["bash", "Counter", "Healing"]
}

personaje.puebloNatal = "Pueblo Paleta";

console.table(personaje);