"use strict";
exports.__esModule = true;
exports.TipoConsumo = void 0;
var TipoConsumo = /** @class */ (function () {
    function TipoConsumo() {
        this.tipos = ["A", "B", "C", "D", "E", "F"];
    }
    TipoConsumo.prototype.GetTipoConsumo = function (index) {
        return this.tipos[index];
    };
    TipoConsumo.prototype.GetTypes = function () {
        return this.tipos;
    };
    return TipoConsumo;
}());
exports.TipoConsumo = TipoConsumo;
