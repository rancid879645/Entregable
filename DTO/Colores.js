"use strict";
exports.__esModule = true;
exports.Colores = void 0;
var Colores = /** @class */ (function () {
    function Colores() {
        this.Colores = ['BLANCO', 'NEGRO', 'ROJO', 'AZUL', 'GRIS'];
    }
    Colores.prototype.GetColor = function (index) {
        return this.Colores[index];
    };
    Colores.prototype.GetColors = function () {
        return this.Colores;
    };
    return Colores;
}());
exports.Colores = Colores;
