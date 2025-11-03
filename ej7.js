// Ejercicio 7: Función tieneDuplicados
function tieneDuplicados(arr) {
    const setTemporal = new Set(arr);
    return setTemporal.size !== arr.length;
}

alert("Ejercicio 7:");
const entrada7 = prompt("Ingresa elementos separados por comas para verificar duplicados:");
const array7 = entrada7.split(',').map(elemento => elemento.trim());

const resultado7 = tieneDuplicados(array7);

alert("Ejercicio 7: Detectar Duplicados\n" +
      "Array ingresado: " + array7.join(", ") + "\n" +
      "¿Tiene duplicados?: " + (resultado7 ? "SÍ" : "NO"));