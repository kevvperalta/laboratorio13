function doblarNumeros(numeros) {
    return numeros.map(numero => numero * 2);
}

alert("Ejercicio 3:");
const entrada3 = prompt("Ingresa números separados por comas:");
const numeros3 = entrada3.split(',').map(num => parseFloat(num.trim()));

const resultado3 = doblarNumeros(numeros3);

alert("Ejercicio 3:\n" +
      "Array original: " + numeros3.join(", ") + "\n" +
      "Array doblado: " + resultado3.join(", "));