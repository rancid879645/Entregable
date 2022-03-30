import { Electrodomestico } from '../Abstract/Electrodomestico';
import { ILavadora } from '../Interfaces/ILavadora';
export class Lavadora extends Electrodomestico implements ILavadora
{
    
    readonly _carga:number = 5;

    carga:number;

    constructor();
    constructor(precio:number, peso:number);
    constructor(precio?:number, peso?:number, color?:string, consumoElectrico?:string, carga?:number);
    constructor(precio?:number, peso?:number, color?:string, consumoElectrico?:string, carga?:number){
        super(precio,peso,color,consumoElectrico);
        this.carga = this._carga;
        
    if(precio != undefined)
        this.precioBase = precio;
    
    if(color != undefined)
        this.color = this.ComprobarColor(color);
    
    if(consumoElectrico != undefined)
        this.consumoElectrico = this.ComprobarConsumoElectrico(consumoElectrico);
        
    if(peso != undefined)
        this.peso = peso; 
        
    if(carga != undefined)
        this.carga = carga;
    }

    getCarga():number
    {
        return this.carga;
    }

    GetColor(){
        console.log(this.color);
    }
    GetConsumoElectrico(){
        console.log(this.consumoElectrico);
    }
    GetPeso(){
        console.log(this.peso);
    }   

    PrecioFinal(): number {
        let precioparcial = this.PrecioParcial(this.peso, this.consumoElectrico);
        let precio:number = this.carga > 30 ? precioparcial + 50 : precioparcial;
        return precio;
    }

}