import { Cliente } from './cliente.js';
import { Impuestos } from './impuestos.js';

// Crear instancia a partir de clase Impuestos
let impuestosC1 = new Impuestos(1000000, 200000);
// Crear instancia de cliente a partir de clase Cliente
let c1 = new Cliente('April Ludgate', impuestosC1);

// Cambiar nombre de cliente 1
c1.nombre = 'Leslie Knope';
// Cambiar impuestos
impuestosC1.deducciones = 80000;

// Imprimir datos y resultado en consola
console.log(`Cliente: ${c1.nombre}`);
console.log(`Monto Bruto Anual: ${impuestosC1.montoBrutoAnual}`);
console.log(`Deducciones: ${impuestosC1.deducciones}`);
console.log(`Impuestos: ${c1.calcularImpuesto(impuestosC1.montoBrutoAnual, impuestosC1.deducciones)}`);