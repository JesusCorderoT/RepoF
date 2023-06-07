/*

Hoisting:

Es fundamental en el entendimiento de la forma en que se ejecuta nuestro
código de JS, esto aplica tanto para variables como para funciones.

Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es
mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables 
declaradas dentro del código.

Yo puedo invocar una función antes de siquiera declararla.

/*
JS, cuando es ejecutado por el motor JS del navegador,
primero lee e interpreta las variables y las
funciones declaradas.



*/

// Funciones, invocación y declaracióm

//Declaración de una función

/*

palabra reservada - function

nombre de la funcion - nombreFuncion
establecer parametros -recibe de 0 a n parametros y se encasillan
dentro un paréntesis ()

establecer el bloque de código sobre el que vamos a trabajar
lo hacemos mediante llaves {
codigo a ejecutar
}


*/


/*

Scope : 

El concepto scope hace referencia al alcance que tiene
una variable dentro de un código JS.

var, let y const.

var : global - quiere decir que se puede utilizar o
trabajar con esta variable dentro de cualquier
parte del código

let : porque además de funcionar de manera global
en caso de ser requerida, también puede solo ser
utilizada de manera local.

const : se refiere, por su nombre tan intuitivo,
a la palabra constante, esto quiere decir que su
valor no puede ser reasignado.

El uso de la palabra reservada 'var' no es tan recomendado
por el comportamiento y la poca adaptabilidad de una
variable.

Entonces, se implementan let y const como una 
alternativa mucho más eficiente para determinar el 
Scope o alcance que tiene una variable.

*/



// nuevaFuncion();

// function nuevaFuncion(){
//     console.log("Buenos días CH28");
// }


// var x = 9;
// const a =  x; 


// Ejemplo de función pero no retorna ningún valor
// No recibe ningún parámetro
// function nuevaFuncion(){
//     console.log("Buenos días CH28");
// }

var nombre = "Jesus";

// Ejemplo de función que si retorna un valor
// Tamién recibe un parámetro
function holaMundo(nombre){
    return "Hola " + nombre; // Si retorna un valor
}

//holaMundo(nombre);
//console.log(holaMundo("Fernando"));

// function calcularVelocidad(distancia, tiempo) {
//     // distancia en metros, tiempo en segundos
//     let velocidad = distancia / tiempo;
//     return velocidad;
// }

// const distancia = 50;
// const tiempo = 60;
// const velocidad = calcularVelocidad(distancia, tiempo);
// console.log(`La velocidad del objeto es ${velocidad} m/s`);


// const calcularVelocidadFlecha = (distanciaFlecha, tiempoFlecha) => {
    
//     console.log("Distancia =  " + distanciaFlecha + " metros");
//     console.log("Tiempo = " + tiempoFlecha + " segundos");
//     return "La velocidad calculada es = " + distanciaFlecha / tiempoFlecha + " m/s";
// }



// const calcularVelocidad2 = (distancia, tiempo) => distancia / tiempo;

// function a(distancia, tiempo)
// {
// return "La velocidad es " + calcularVelocidad2(distancia, tiempo) + "M/S";
// }


