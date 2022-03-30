"use strict";
exports.__esModule = true;
var Lavadora_1 = require("./Implementations/Lavadora");
var Televisor_1 = require("./Implementations/Televisor");
var totalTv = 0;
var totalLavadora = 0;
var grandTotal = 0;
var list;
list = [(new Televisor_1.Televisor(100, 20, "NEGRO", "C", 50, true))];
list.push(new Televisor_1.Televisor(200, 30, "AZUL", "A", 50, true));
list.push(new Televisor_1.Televisor(1000, 40, "BLANCO", "B", 50, true));
list.push(new Televisor_1.Televisor(50, 10, "GRIS", "D", 50, true));
list.push(new Televisor_1.Televisor(20, 5, "AZUL", "E", 50, true));
list.push(new Lavadora_1.Lavadora(250, 60, "NEGRO", "F", 50));
list.push(new Lavadora_1.Lavadora(31000, 24, "BLANCO", "A", 60));
list.push(new Lavadora_1.Lavadora(339, 20, "NEGRO", "B", 10));
list.push(new Lavadora_1.Lavadora(450.9, 5, "AZUL", "C", 24));
list.push(new Lavadora_1.Lavadora(129.9, 54, "ROJO", "D", 12));
list.forEach(function (electro) {
    if (electro instanceof Televisor_1.Televisor) {
        totalTv = totalTv + electro.PrecioFinal();
    }
    else if (electro instanceof Lavadora_1.Lavadora) {
        totalLavadora = totalLavadora + electro.PrecioFinal();
    }
});
grandTotal = totalLavadora + totalTv;
console.log("-----------------------------------------");
console.log("Precio total TV: $" + totalTv.toString());
console.log("Precio total Lavadoras: $" + totalLavadora.toString());
console.log("Precio total: $" + grandTotal.toString());
console.log("-----------------------------------------");
