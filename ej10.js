function invertirMap(mapOriginal) {
    const mapaInvertido = new Map();
    
    mapOriginal.forEach((valor, clave) => {
        mapaInvertido.set(valor, clave);
    });
    
    return mapaInvertido;
}

alert("Ejercicio 10:");
const capitales = new Map([
    ["Perú", "Lima"],
    ["Chile", "Santiago"],
    ["Argentina", "Buenos Aires"]
]);

const resultado10 = invertirMap(capitales);

let mensaje10 = "Ejercicio 10: Invertir Map\nMapa original:\n";
capitales.forEach((valor, clave) => {
    mensaje10 += `${clave} => ${valor}\n`;
});

mensaje10 += "\nMapa invertido:\n";
resultado10.forEach((valor, clave) => {
    mensaje10 += `${clave} => ${valor}\n`;
});

alert(mensaje10);