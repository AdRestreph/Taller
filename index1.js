alert("Calcular la suma de 2 numeros e imprimir el resultado.");
const num1 = prompt("Por favor ingrese el numero 1");
const num2 = prompt("Por favor ingrese el numero 2");

if ((num1 && num2) != "") {
  const resultado = parseInt(num1) + parseInt(num2);

  alert(`La suma de ` + num1 + `+` + num2 + ` es igual a ${resultado}`);
} else {
  alert("Ingrese valores validos para realizar la suma");
}
