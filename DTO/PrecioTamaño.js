"use strict";
exports.__esModule = true;
exports.PrecioTamaño = void 0;
var PrecioTamaño = /** @class */ (function () {
    function PrecioTamaño(MinSize, MaxSize, Costo) {
        this.MinSize = 0;
        this.MaxSize = 0;
        this.Costo = 0;
        if (MinSize != undefined)
            this.MinSize = MinSize;
        if (MaxSize != undefined)
            this.MaxSize = MaxSize;
        if (Costo != undefined)
            this.Costo = Costo;
    }
    return PrecioTamaño;
}());
exports.PrecioTamaño = PrecioTamaño;
