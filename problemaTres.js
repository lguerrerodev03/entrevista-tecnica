console.log("############################");
console.log("## PROBLEMA 3 ##");
console.log("############################");

/*
function evaluateExpression(expr) {
    expr = expr.replace(/ /g, "");
    

    if (expr.includes("(")) {
        // construyo la subexpresion
        let inicio = expr.indexOf('(');
        let fin = expr.lastIndexOf(')');
        let subExpresion = expr.substring(inicio+1, fin);

        console.log(subExpresion);

        // aplico recursividad
        let resultado = evaluateExpression(subExpresion);

        // realizar el cambio
        let cambio = expr.substring(inicio, fin+1);
        expr.replace(cambio, resultado);

        console.log(subExpresion);
    }

    // si es que no tiene parentesis se continua con la operacion
    let operacionActual;

    console.log("antes del if")
    if (expr.includes("*")) {
        let ubicacion = expr.indexOf('*');
        let subOperacion = expr.substring(ubicacion-1, ubicacion+2);
        let subResultado = realizarUnaOperacion(subOperacion);
        expr.replace(subOperacion, subResultado)
        evaluateExpression(expr);
    } else if (expr.includes("/")) {
        let ubicacion = expr.indexOf('/');
        let subOperacion = expr.substring(ubicacion-1, ubicacion+2);
        let subResultado = realizarUnaOperacion(subOperacion);
        expr.replace(subOperacion, subResultado)
        evaluateExpression(expr);
    } else if (expr.includes("+")) {
        console.log("entro al mas");
        let ubicacion = expr.indexOf('+');
        let subOperacion = expr.substring(ubicacion-1, ubicacion+2);
        console.log(subOperacion);
        let subResultado = realizarUnaOperacion(subOperacion);
        console.log(subResultado);
        console.log(expr);
        expr.replace(subOperacion, subResultado);
        evaluateExpression(expr);
    } else if (expr.includes("-")) {
        let ubicacion = expr.indexOf('-');
        let subOperacion = expr.substring(ubicacion-1, ubicacion+2);
        let subResultado = realizarUnaOperacion(subOperacion);
        expr.replace(subOperacion, subResultado)
        evaluateExpression(expr);
    }


    function realizarUnaOperacion(operacionCorta) {
        let respuesta;
        let n1 = parseInt(operacionCorta[0]);
        let n2 = parseInt(operacionCorta[2]);
        switch (operacionCorta[1]) {
            case '*':
                respuesta = n1*n2;
                break;
            case '/':
                respuesta = n1/n2;
                break;
            case '+':
                respuesta = n1+n2;
                break;
            case '-':
                respuesta = n1-n2;
                break;
            default:
                break;
        }
        return respuesta.toString();
    }

    return expr;
}
//Ejemplo:
evaluateExpression("3 + 2 * (1 + 1)")
//Salida esperada: 7

*/

