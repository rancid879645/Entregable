
export class Colores{

    private Colores:string[] = ['BLANCO', 'NEGRO', 'ROJO', 'AZUL','GRIS'];

    constructor(){}

    GetColor(index:number):string{
        return this.Colores[index];
    }

    GetColors():string[]{
        return this.Colores;
    }

}

