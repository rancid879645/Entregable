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
exports.Televisor = void 0;
var Electrodomestico_1 = require("../Abstract/Electrodomestico");
var Televisor = /** @class */ (function (_super) {
    __extends(Televisor, _super);
    function Televisor(precio, peso, color, consumoElectrico, resolucion, sintonizador) {
        var _this = _super.call(this, precio, peso, color, consumoElectrico) || this;
        _this._resolucion = 20;
        _this._sintonizador = false;
        _this.resolucion = _this._resolucion;
        _this.sintonizador = _this._sintonizador;
        if (precio != undefined)
            _this.precioBase = precio;
        if (color != undefined)
            _this.color = _this.ComprobarColor(color);
        if (consumoElectrico != undefined)
            _this.consumoElectrico = _this.ComprobarConsumoElectrico(consumoElectrico);
        if (peso != undefined)
            _this.peso = peso;
        if (resolucion != undefined)
            _this.resolucion = resolucion;
        if (sintonizador != undefined)
            _this.sintonizador = sintonizador;
        return _this;
    }
    Televisor.prototype.GetColor = function () {
        console.log(this.color);
    };
    Televisor.prototype.GetConsumoElectrico = function () {
        console.log(this.consumoElectrico);
    };
    Televisor.prototype.GetPeso = function () {
        console.log(this.peso);
    };
    Televisor.prototype.PrecioFinal = function () {
        var precioparcial = this.PrecioParcial(this.peso, this.consumoElectrico);
        var precio = this.resolucion > 40 ? precioparcial + (precioparcial * 0.3) : precioparcial;
        precio = this.sintonizador ? precio + 50 : precio;
        return precio;
    };
    Televisor.prototype.getResolucion = function () {
        return this.resolucion;
    };
    return Televisor;
}(Electrodomestico_1.Electrodomestico));
exports.Televisor = Televisor;
