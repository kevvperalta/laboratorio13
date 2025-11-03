function contarPalabras(texto) {
    const palabras = texto.toLowerCase().split(' ');
    const contador = new Map();
    
    palabras.forEach(palabra => {
        if (contador.has(palabra)) {
            contador.set(palabra, contador.get(palabra) + 1);
        } else {
            contador.set(palabra, 1);
        }
    });
    
    return contador;
}

const entrada9 = prompt("ingresa una oración para contar palabras:");
const resultado9 = contarPalabras(entrada9);

let mensaje9 = "Ejercicio 9: Contar Palabras\n";
resultado9.forEach((valor, clave) => {
    mensaje9 += `${clave} => ${valor}\n`;
});

alert(mensaje9);