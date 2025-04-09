console.log("############################");
console.log("## PROBLEMA 1 ##");
console.log("############################");

let arreglo = [1, 2, 3, 4, 5];
let n = 3;

console.log(getCombinations(arreglo, n));

function getCombinations(arr, k) {
    let combinaciones = [];

    function combinar(inicio, combinacion) {

        // si la combinacion tiene el tamaño requerido en el parámetro se agrega
        if (combinacion.length === k) {
            combinaciones.push([...combinacion]);
            return;
        }

        for (let i = inicio; i < arr.length; i++) {
            combinacion.push(arr[i]);
            // aqui se aplica recursividad
            combinar(i+1, combinacion);
            combinacion.pop();
        }
    }

    combinar(0, []);

    return combinaciones;
}


