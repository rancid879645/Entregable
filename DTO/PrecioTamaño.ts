export class PrecioTamaño{
    MinSize:number = 0;
    MaxSize:number = 0;
    Costo:number = 0;
    
    constructor();
    constructor(MinSize?:number,MaxSize?:number,Costo?:number);
    constructor(MinSize?:number,MaxSize?:number,Costo?:number)
    {
        if(MinSize != undefined)        
            this.MinSize = MinSize;
        if(MaxSize != undefined)    
            this.MaxSize = MaxSize;
        if(Costo != undefined)
            this.Costo = Costo;
    }
}