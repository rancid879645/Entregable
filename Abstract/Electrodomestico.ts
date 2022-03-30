import {Colores} from '../DTO/Colores';
import { TipoConsumo } from '../DTO/TipoConsumo';
import {PrecioTamaño} from '../DTO/PrecioTamaño';
import { PrecioConsumo } from '../DTO/PrecioConsumo';

export abstract class Electrodomestico{

    private readonly _precioBase:number=100;
    private readonly _color:string= new Colores().GetColor(0);
    private readonly _consumoElectrico:string= new TipoConsumo().GetTipoConsumo(5);
    private readonly _peso:number=5;

    precioBase:number;
    color:string;
    consumoElectrico:string;
    peso:number;

    constructor();
    constructor(precioBase:number, peso:number);
    constructor(precio?:number, peso?:number, color?:string, consumoElectrico?:string);
    constructor(precioBase?:number, peso?:number, color?:string, consumoElectrico?:string)
    {
        this.precioBase = this._precioBase;
        this.color = this._color;
        this.consumoElectrico = this._consumoElectrico;
        this.peso = this._peso;  
        
        if(precioBase != undefined)
            this.precioBase = precioBase;
        
        if(color != undefined)
            this.color = this.ComprobarColor(color);
        
        if(consumoElectrico != undefined)
            this.consumoElectrico = this.ComprobarConsumoElectrico(consumoElectrico);
            
        if(peso != undefined)
            this.peso = peso;

    }

    GetPrecioBase(){
        console.log(this.precioBase);
    }

    abstract GetColor():void;
    abstract GetConsumoElectrico():void;
    abstract GetPeso():void;

    ComprobarConsumoElectrico(tipo:string):string{
        let tipoConsumo = new TipoConsumo()
        let types = tipoConsumo.GetTypes();
        let index = types.indexOf(tipo.toUpperCase());
        return index >= 0 ? types[index] : this._consumoElectrico;
    }

    ComprobarColor(color:string):string{
        let colores = new Colores();
        let colors = colores.GetColors();
        let index = colors.indexOf(color.toUpperCase());
        return index >= 0 ? colores.GetColor(index) : this._consumoElectrico;
    }

    PrecioParcial(peso:number, consumoElectrico:string):number{
        let precioTamañoList:PrecioTamaño[];
        let singlePrecioTamaño:PrecioTamaño= new PrecioTamaño();
        let precioConsumoList:PrecioConsumo[];
        let singlePrecioConsumo = new PrecioConsumo();
        precioTamañoList = [(singlePrecioTamaño={MinSize: 0, MaxSize:19, Costo:10 })];        
        precioTamañoList.push(singlePrecioTamaño={MinSize: 20, MaxSize:49, Costo:50 });
        precioTamañoList.push(singlePrecioTamaño={MinSize: 50, MaxSize:79, Costo:80 });
        precioTamañoList.push(singlePrecioTamaño={MinSize: 80, MaxSize:100, Costo:100 });
        precioConsumoList= [(singlePrecioConsumo={Consumo:'A',Costo:100})];
        precioConsumoList.push(singlePrecioConsumo={Consumo:'B',Costo:80});
        precioConsumoList.push(singlePrecioConsumo={Consumo:'C',Costo:60});
        precioConsumoList.push(singlePrecioConsumo={Consumo:'D',Costo:50});
        precioConsumoList.push(singlePrecioConsumo={Consumo:'E',Costo:30});
        precioConsumoList.push(singlePrecioConsumo={Consumo:'F',Costo:10});
        let precioFinal:number = 0;
        let aumentoConsumo = precioConsumoList.filter(p => p.Consumo == consumoElectrico);
        let aumentoTamaño = precioTamañoList.filter(p => peso >= p.MinSize  && peso <= p.MaxSize );
        precioFinal = this.precioBase + aumentoConsumo[0].Costo + aumentoTamaño[0].Costo;
        return precioFinal;
    }

    abstract PrecioFinal(): number;

}
