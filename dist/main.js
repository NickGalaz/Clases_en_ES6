"use strict";

var _cliente = require("./cliente.js");

var _impuestos = require("./impuestos.js");

// Crear instancia a partir de clase Impuestos
var impuestosC1 = new _impuestos.Impuestos(1000000, 200000); // Crear instancia de cliente a partir de clase Cliente

var c1 = new _cliente.Cliente('April Ludgate', impuestosC1); // Cambiar nombre de cliente 1

c1.nombre = 'Leslie Knope'; // Cambiar impuestos

impuestosC1.deducciones = 80000; // Imprimir datos y resultado en consola

console.log("Cliente: ".concat(c1.nombre));
console.log("Monto Bruto Anual: ".concat(impuestosC1.montoBrutoAnual));
console.log("Deducciones: ".concat(impuestosC1.deducciones));
console.log("Impuestos: ".concat(c1.calcularImpuesto(impuestosC1.montoBrutoAnual, impuestosC1.deducciones)));