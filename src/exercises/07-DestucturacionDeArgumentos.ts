/*
    ===== Código de TypeScript =====
    ===== Destructuración de argumentos =====
*/

interface Producto{
    descripcion: string;
    precio: number;
}

const telefono: Producto = {
    descripcion: "Nokia A1",
    precio: 150
}

const tableta: Producto = {
    descripcion: "Ipad Pro",
    precio: 250
}

function calculaISV( productos : Producto[] ):[number, number]{ //Recibe un arreglo y retorna un arreglo 
    let total = 0;
    productos.forEach(({precio}) => { //Destructurar arguementos
        total += precio
    })
    return [total, total * 0.15]; //Regresa arrego con dos resultados
}

const articulos = [telefono, tableta];
const [total, isv] = calculaISV(articulos); //Destucturacion hecha con total y isv

console.log("total:", total, "ISV: ", isv);
