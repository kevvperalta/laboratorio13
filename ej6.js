alert("Ejercicio 6:");
const entrada6 = prompt("Ingresa nombres separados por comas:");
const nombres6 = entrada6.split(',').map(nombre => nombre.trim());

const setNombres = new Set(nombres6);

alert("Ejercicio 6\n" +
      "array original con duplicados: " + nombres6.join(", ") + "\n" +
      "s   et sin duplicados: " + Array.from(setNombres).join(", "));