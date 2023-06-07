///////EJERCICIOS///////////////////
// 1.- Calcular el cuadrado de un numero 

//Funcion tradicional 
function cuadrado1(numero1, numero2)
{
var resultado = Math.pow(numero1,numero2);
return "El resultado es:" + resultado;
}


//Funcion flecha
const calcularCuadrado = (numero) => numero * numero;

const numero = 5;
const cuadrado = calcularCuadrado(5);
console.log(`El cuadrado de ${numero} es ${cuadrado}`);

// 2.- Convertir de grados Celcius a Farenheith --------------------------------------------------------------------------------------------

//Funcion tradicional 
function grados(celcius)
{
var resultado = (celcius * 9 / 5) + 32
return "La convercion es:" +resultado

}

//Funcion flecha
const convertirCelsiusAFahrenheit = (gradosCelsius) => (gradosCelsius * 9/5) + 32;
const gradosCelsius = 25;
const gradosFahrenheit = convertirCelsiusAFahrenheit(gradosCelsius);
console.log(`${gradosCelsius}°C equivale a ${gradosFahrenheit}°F`);

/* 3.- Realizar una función que calcule el valor de ---------------------------------------------------------------------------------------
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente. */

//Funcion tradicional 

function calcularVoltaje(resistencia, corriente) {
    var voltaje = resistencia * corriente;
    return voltaje;
  }

//Funcion flecha

const calcularVoltaje2 = (resistencia, corriente) => resistencia * corriente;
const resistencia = 5;
const corriente = 5;
const voltaje = calcularVoltaje2(resistencia,corriente);
console.log(`El voltaje es: ${voltaje}`);


// 4. Elaborar una función que calcule el volumen de
// un cubo, recibiendo como dato de entrada Lado. --------------------------------------------------------------------------------------------------------------

//Funcion tradicional 
function volumen1(lado)
{
var resultado = lado * lado * lado;
return "El volumen es:" + resultado;
}

//Funcion flecha
const calcularVolumenCubo = (lado) => Math.pow(lado, 3);

const lado = 5;
const resultado = calcularVolumenCubo(lado);
console.log(`El volumen del cubo es: ${resultado}`);+

// 5. Calcular el área de un triángulo --------------------------------------------------------------------------------------------------------------

//Funcion tradicional 

function area( base, altura)
{ 
    var resultado = (base * altura) / 2
return "El resultado es:" + resultado;
}

//Funcion flecha
const calcularAreaTriangulo = (base, altura) => (base * altura) / 2;

const base = 10;
const altura = 5;
const area = calcularAreaTriangulo(base, altura);
console.log(`El área del triángulo es: ${area}`);


// 6. Calcular el volumen de una esfera
//Funcion tradicional 
function calcularVolumenEsfera(radio) {
    var volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
    return volumen;
}

//Funcion flecha
const calcularVolumenEsfera2 = (radio) => (4 / 3) * Math.PI * Math.pow(radio, 3);

const radio = 5;
const volumen = calcularVolumenEsfera(radio);
console.log(`El volumen de la esfera es: ${volumen}`);



// 7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

const texto = "Este es un ejemplo de texto";
const textoMayusculas = texto.toUpperCase();
console.log(textoMayusculas);


function mayus(textoo) 
{
    var resultado = textoo.toUpperCase();
    return resultado;
}



