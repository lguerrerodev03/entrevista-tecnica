
console.log("############################");
console.log("## PROBLEMA 2 ##");
console.log("############################");


const deps = {
    'build': ['lint', 'compile'],
    'compile': ['transpile'],
    'transpile': [],
    'lint': []
  };

let numero = 5;

console.log(resolveDependencies(deps));

function resolveDependencies(dependencies) {
    const salida = [];
    const dependenciasVisitadas= new Set();
    const dependenciasPorVisitar = new Set();


    function visitarDependencia(dependencia) {
        if (dependenciasVisitadas.has(dependencia)){
            return;
        }
        if (dependenciasPorVisitar.has(dependencia)) {
            throw new Error("Entro en ciclo");
        }

        dependenciasPorVisitar.add(dependencia);

        if (dependencies[dependencia]) {
            for (const subDependencia of dependencies[dependencia]) {
                visitarDependencia(subDependencia);
            }
        }

        dependenciasPorVisitar.delete(dependencia);
        dependenciasVisitadas.add(dependencia);
        salida.push(dependencia);
    }

    for (const dependencia in dependencies) {
        if (!dependenciasVisitadas.has(dependencia)) {
            visitarDependencia(dependencia);  
        }
    }

    return salida;
}



