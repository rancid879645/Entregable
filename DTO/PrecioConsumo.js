"use strict";
exports.__esModule = true;
exports.PrecioConsumo = void 0;
var PrecioConsumo = /** @class */ (function () {
    function PrecioConsumo(consumo, costo) {
        this.Consumo = "";
        this.Costo = 0;
        if (consumo != undefined)
            this.Consumo = consumo;
        if (costo != undefined)
            this.Costo = costo;
    }
    return PrecioConsumo;
}());
exports.PrecioConsumo = PrecioConsumo;
