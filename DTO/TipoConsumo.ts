
export class TipoConsumo{
    private tipos:string[]=["A","B","C","D","E","F"];

    constructor(){}

    GetTipoConsumo(index:number):string{
        return this.tipos[index];
    }

    GetTypes():string[]{
        return this.tipos;
    }
}

