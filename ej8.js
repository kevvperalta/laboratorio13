// Ejercicio 8: Map con productos y precios
const productos = new Map([
    ["laptop", 3500.5],
    ["mouse", 100.35],
    ["teclado", 250.9],
    ["monitor", 720.457],
    ["audífonos", 150.25],
    ["tablet", 800.75]
]);

alert("Ejercicio 8:");
const entrada8 = prompt("Ingresa productos para comprar (separados por comas, ej: laptop,mouse):");
const listaCompras8 = entrada8.split(',').map(producto => producto.trim().toLowerCase());

let precioTotal8 = 0;
listaCompras8.forEach(producto => {
    if (productos.has(producto)) {
        precioTotal8 += productos.get(producto);
    }
});

alert("Ejercicio 8: Map con Productos\n" +
      "Lista de compras: " + listaCompras8.join(", ") + "\n" +
      "Precio total: $" + precioTotal8.toFixed(2));