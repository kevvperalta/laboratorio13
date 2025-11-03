const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2023,
    detalles: function() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
};

alert("Ejercicio 11: Objeto Auto\n" + auto.detalles());