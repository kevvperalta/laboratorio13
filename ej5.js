function reordenarPalabras(oracion) {
    return oracion
        .split(" ") // para separar por espacios
        .map(palabra => palabra.toUpperCase()) // para convertir a mayusculas
        .sort(); // ordenar alfabeticamente
}

alert("Ejercicio 5:");
const entrada5 = prompt("Ingresa varias palabras separadas por espacios:");

const resultado5 = reordenarPalabras(entrada5);

alert("Ejercicio 5:\n" +
      "Oración original: " + entrada5 + "\n" +
      "Palabras ordenadas: " + resultado5.join(", "));