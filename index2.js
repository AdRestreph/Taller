alert("Suma de 3 productos con cantidades diferentes y adicionar un 10 %");

alert("INGRESE LOS VALORES DEL PRODUCTO 1");
const nombre1 = prompt("Ingrese el nombre del producto 1");
const cantidad1 = prompt("Ingrese la cantidad del producto 1");
const precio1 = prompt("Ingrese el precio del producto 1");
alert("INGRESE LOS VALORES DEL PRODUCTO 2");
const nombre2 = prompt("Ingrese el nombre del producto 2");
const cantidad2 = prompt("Ingrese la cantidad del producto 2");
const precio2 = prompt("Ingrese el precio del producto 2");
alert("INGRESE LOS VALORES DEL PRODUCTO 3");
const nombre3 = prompt("Ingrese el nombre del producto 3");
const cantidad3 = prompt("Ingrese el cantidad del producto 3");
const precio3 = prompt("Ingrese el precio del producto 3");

const sumatoria =
  parseFloat(precio1 * cantidad1) +
  parseFloat(precio2 * cantidad2) +
  parseFloat(precio3 * cantidad3);

const impuesto = sumatoria * 0.1;

const pagoTotal = sumatoria + impuesto;

alert("El valor a pagar es: " + sumatoria);
alert("El valor total a pagar es: " + pagoTotal + " El impuesto: " + impuesto);
