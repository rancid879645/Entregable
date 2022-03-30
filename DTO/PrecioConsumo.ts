export class PrecioConsumo{
    Consumo:string = "";
    Costo:number = 0;

    constructor();
    constructor(consumo?:string, costo?:number);
    constructor(consumo?:string, costo?:number){
        if(consumo != undefined)        
            this.Consumo = consumo;
        if(costo != undefined)    
            this.Costo = costo;
    }
}