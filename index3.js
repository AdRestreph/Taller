alert("Ingrese el valor total de la cuenta para calcular la propina: ");

const cuenta = prompt("Valor de la cuenta: ");

const propina = parseFloat(cuenta) * 0.15;

const valortotal = parseFloat(cuenta) + parseFloat(propina);

alert(`La propina es: ${propina}`);
alert("El valor total con propina incluida es: " + valortotal);
