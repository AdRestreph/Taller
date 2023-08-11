alert("CALCULAR EL INDICE DE MASA CORPORAL (IMC)");
const peso = prompt("Ingrese el peso en kilogramos");
const altura = prompt("Ingrese la altura en metros");

const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

alert("SU INDICE DE MASA CORPORAL (IMC) ES: " + imc);
