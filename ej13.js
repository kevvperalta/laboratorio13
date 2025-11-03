function combinarCatalogos(tiendaA, tiendaB) {
    const catalogoCombinado = {};
    
    // Agregar productos de tiendaA
    for (let producto in tiendaA) {
        catalogoCombinado[producto] = parseFloat(tiendaA[producto].toFixed(2));
    }
    
    // Agregar productos de tiendaB
    for (let producto in tiendaB) {
        const precioB = parseFloat(tiendaB[producto].toFixed(2));
        if (catalogoCombinado[producto]) {
            // Mantener el precio más bajo
            catalogoCombinado[producto] = Math.min(catalogoCombinado[producto], precioB);
        } else {
            catalogoCombinado[producto] = precioB;
        }
    }
    
    return catalogoCombinado;
}

alert("Ejercicio 13:");
const tiendaA = {
    laptop: 3500.5,
    mouse: 100.35,
    teclado: 250.9
};

const tiendaB = {
    mouse: 95.2,
    monitor: 720.457,
    teclado: 260.1
};

const resultado13 = combinarCatalogos(tiendaA, tiendaB);

let mensaje13 = "Ejercicio 13: Combinar catalogos\ncatalogo combinado:\n";
for (let producto in resultado13) {
    mensaje13 += `${producto}: $${resultado13[producto].toFixed(2)}\n`;
}

alert(mensaje13);