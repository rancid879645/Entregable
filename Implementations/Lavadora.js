"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Lavadora = void 0;
var Electrodomestico_1 = require("../Abstract/Electrodomestico");
var Lavadora = /** @class */ (function (_super) {
    __extends(Lavadora, _super);
    function Lavadora(precio, peso, color, consumoElectrico, carga) {
        var _this = _super.call(this, precio, peso, color, consumoElectrico) || this;
        _this._carga = 5;
        _this.carga = _this._carga;
        if (precio != undefined)
            _this.precioBase = precio;
        if (color != undefined)
            _this.color = _this.ComprobarColor(color);
        if (consumoElectrico != undefined)
            _this.consumoElectrico = _this.ComprobarConsumoElectrico(consumoElectrico);
        if (peso != undefined)
            _this.peso = peso;
        if (carga != undefined)
            _this.carga = carga;
        return _this;
    }
    Lavadora.prototype.getCarga = function () {
        return this.carga;
    };
    Lavadora.prototype.GetColor = function () {
        console.log(this.color);
    };
    Lavadora.prototype.GetConsumoElectrico = function () {
        console.log(this.consumoElectrico);
    };
    Lavadora.prototype.GetPeso = function () {
        console.log(this.peso);
    };
    Lavadora.prototype.PrecioFinal = function () {
        var precioparcial = this.PrecioParcial(this.peso, this.consumoElectrico);
        var precio = this.carga > 30 ? precioparcial + 50 : precioparcial;
        return precio;
    };
    return Lavadora;
}(Electrodomestico_1.Electrodomestico));
exports.Lavadora = Lavadora;
