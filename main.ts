import { Lavadora } from './Implementations/Lavadora';
import { Televisor } from './Implementations/Televisor';
import { Electrodomestico } from './Abstract/Electrodomestico';

class Main
{
    constructor(){}

    execute()
    {
        let totalTv:number = 0;
        let totalLavadora:number = 0;
        let grandTotal = 0;
        let list:Electrodomestico[];

        list = [(new Televisor(100,20,"NEGRO","C",50,true))];        
        list.push(new Televisor(200,30,"AZUL","A",50,true));
        list.push(new Televisor(1000,40,"BLANCO","B",50,true));
        list.push(new Televisor(50,10,"GRIS","D",50,true));
        list.push(new Televisor(20,5,"AZUL","E",50,true));
        list.push(new Lavadora(250,60,"NEGRO","F",50));
        list.push(new Lavadora(31000,24,"BLANCO","A",60));
        list.push(new Lavadora(339,20,"NEGRO","B",10));
        list.push(new Lavadora(450.9,5,"AZUL","C",24));
        list.push(new Lavadora(129.9,54,"ROJO","D",12));  

        list.forEach(electro => {    
            if(electro instanceof Televisor){
                totalTv = totalTv + electro.PrecioFinal();
            }
            else
            if(electro instanceof Lavadora){
                totalLavadora = totalLavadora + electro.PrecioFinal();
            }    
        });

        grandTotal = totalLavadora + totalTv;
        console.log("-----------------------------------------");
        console.log("Precio total TV: $"+totalTv.toString());
        console.log("Precio total Lavadoras: $"+totalLavadora.toString());
        console.log("Precio total: $"+grandTotal.toString());
        console.log("-----------------------------------------");
    }   

     
}