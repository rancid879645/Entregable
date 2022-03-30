import { Electrodomestico } from '../Abstract/Electrodomestico';
import { ITelevisor } from '../Interfaces/ITelevisor';
export class Televisor extends Electrodomestico implements ITelevisor
{
    readonly _resolucion:number = 20;
    readonly _sintonizador:boolean = false;
    resolucion:number;
    sintonizador:boolean;

    constructor();
    constructor(precio:number, peso:number);
    constructor(precio?:number, peso?:number, color?:string, consumoElectrico?:string, resolucion?:number, sintonizador?:boolean);
    constructor(precio?:number, peso?:number, color?:string, consumoElectrico?:string, resolucion?:number, sintonizador?:boolean){
        super(precio,peso,color,consumoElectrico);
        this.resolucion = this._resolucion;
        this.sintonizador = this._sintonizador;
        
        if(precio != undefined)
            this.precioBase = precio;
    
        if(color != undefined)
            this.color = this.ComprobarColor(color);
    
        if(consumoElectrico != undefined)
            this.consumoElectrico = this.ComprobarConsumoElectrico(consumoElectrico);
        
        if(peso != undefined)
            this.peso = peso;    

        if(resolucion != undefined)
            this.resolucion = resolucion;

        if(sintonizador != undefined)
            this.sintonizador = sintonizador;
    }


    GetColor(): void {
        console.log(this.color);
    }
    GetConsumoElectrico(): void {
        console.log(this.consumoElectrico);
    }
    GetPeso(): void {
        console.log(this.peso);
    }
    PrecioFinal(): number {
        let precioparcial = this.PrecioParcial(this.peso, this.consumoElectrico);
        let precio:number = this.resolucion > 40 ? precioparcial + (precioparcial*0.3) : precioparcial;
        precio = this.sintonizador ? precio + 50 : precio;
        return precio;
    }
    getResolucion():number{
        return this.resolucion;
    }
}