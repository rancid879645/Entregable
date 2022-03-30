"use strict";
exports.__esModule = true;
exports.Electrodomestico = void 0;
var Colores_1 = require("../DTO/Colores");
var TipoConsumo_1 = require("../DTO/TipoConsumo");
var PrecioTama_o_1 = require("../DTO/PrecioTama\u00F1o");
var PrecioConsumo_1 = require("../DTO/PrecioConsumo");
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(precioBase, peso, color, consumoElectrico) {
        this._precioBase = 100;
        this._color = new Colores_1.Colores().GetColor(0);
        this._consumoElectrico = new TipoConsumo_1.TipoConsumo().GetTipoConsumo(5);
        this._peso = 5;
        this.precioBase = this._precioBase;
        this.color = this._color;
        this.consumoElectrico = this._consumoElectrico;
        this.peso = this._peso;
        if (precioBase != undefined)
            this.precioBase = precioBase;
        if (color != undefined)
            this.color = this.ComprobarColor(color);
        if (consumoElectrico != undefined)
            this.consumoElectrico = this.ComprobarConsumoElectrico(consumoElectrico);
        if (peso != undefined)
            this.peso = peso;
    }
    Electrodomestico.prototype.GetPrecioBase = function () {
        console.log(this.precioBase);
    };
    Electrodomestico.prototype.ComprobarConsumoElectrico = function (tipo) {
        var tipoConsumo = new TipoConsumo_1.TipoConsumo();
        var types = tipoConsumo.GetTypes();
        var index = types.indexOf(tipo.toUpperCase());
        return index >= 0 ? types[index] : this._consumoElectrico;
    };
    Electrodomestico.prototype.ComprobarColor = function (color) {
        var colores = new Colores_1.Colores();
        var colors = colores.GetColors();
        var index = colors.indexOf(color.toUpperCase());
        return index >= 0 ? colores.GetColor(index) : this._consumoElectrico;
    };
    Electrodomestico.prototype.PrecioParcial = function (peso, consumoElectrico) {
        var precioTamañoList;
        var singlePrecioTamaño = new PrecioTama_o_1.PrecioTamaño();
        var precioConsumoList;
        var singlePrecioConsumo = new PrecioConsumo_1.PrecioConsumo();
        precioTamañoList = [(singlePrecioTamaño = { MinSize: 0, MaxSize: 19, Costo: 10 })];
        precioTamañoList.push(singlePrecioTamaño = { MinSize: 20, MaxSize: 49, Costo: 50 });
        precioTamañoList.push(singlePrecioTamaño = { MinSize: 50, MaxSize: 79, Costo: 80 });
        precioTamañoList.push(singlePrecioTamaño = { MinSize: 80, MaxSize: 100, Costo: 100 });
        precioConsumoList = [(singlePrecioConsumo = { Consumo: 'A', Costo: 100 })];
        precioConsumoList.push(singlePrecioConsumo = { Consumo: 'B', Costo: 80 });
        precioConsumoList.push(singlePrecioConsumo = { Consumo: 'C', Costo: 60 });
        precioConsumoList.push(singlePrecioConsumo = { Consumo: 'D', Costo: 50 });
        precioConsumoList.push(singlePrecioConsumo = { Consumo: 'E', Costo: 30 });
        precioConsumoList.push(singlePrecioConsumo = { Consumo: 'F', Costo: 10 });
        var precioFinal = 0;
        var aumentoConsumo = precioConsumoList.filter(function (p) { return p.Consumo == consumoElectrico; });
        var aumentoTamaño = precioTamañoList.filter(function (p) { return peso >= p.MinSize && peso <= p.MaxSize; });
        precioFinal = this.precioBase + aumentoConsumo[0].Costo + aumentoTamaño[0].Costo;
        return precioFinal;
    };
    return Electrodomestico;
}());
exports.Electrodomestico = Electrodomestico;
