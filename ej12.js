function contarLetras(texto) {
    const contador = {};
    const textoMinusculas = texto.toLowerCase();
    
    for (let letra of textoMinusculas) {
        if (letra !== ' ') {
            contador[letra] = (contador[letra] || 0) + 1;
        }
    }
    
    return contador;
}

alert("Ejercicio 12:");
const entrada12 = prompt("Ingresa una palabra para contar letras:");
const resultado12 = contarLetras(entrada12);

let mensaje12 = "Ejercicio 12: Contar Letras\n";
for (let letra in resultado12) {
    mensaje12 += `${letra}: ${resultado12[letra]}\n`;
}

alert(mensaje12);