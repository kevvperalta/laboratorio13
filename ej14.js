function gestionarEmpleados(empleados) {
    const areasMap = new Map();
    empleados.forEach(empleado => {
        if (!areasMap.has(empleado.area)) {
            areasMap.set(empleado.area, {
                empleados: [],
                salarios: []
            });
        }
        
        const areaData = areasMap.get(empleado.area);
        areaData.empleados.push(empleado.nombre);
        areaData.salarios.push(empleado.salario);
    });
    
    // Calcular promedios
    const resultado = {};
    areasMap.forEach((data, area) => {
        const promedio = data.salarios.reduce((sum, salario) => sum + salario, 0) / data.salarios.length;
        resultado[area] = {
            empleados: data.empleados,
            promedio: promedio
        };
    });
    
    return resultado;
}

alert("ejercicio 14:");
const listaEmpleados = [
    { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
    { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
    { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
    { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
];

const resultado14 = gestionarEmpleados(listaEmpleados);

let mensaje14 = "Ejercicio 14: gestionar Empleados\n";
for (let area in resultado14) {
    mensaje14 += `\n${area}:\n`;
    mensaje14 += `  Empleados: ${resultado14[area].empleados.join(', ')}\n`;
    mensaje14 += `  Promedio salarial: $${resultado14[area].promedio}\n`;
}

alert(mensaje14);