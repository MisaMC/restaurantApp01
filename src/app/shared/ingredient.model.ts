export class Ingredient{
   

    constructor(public name:string, public amount:number){
    }
    getIngrediente(Nuevo:number){
        this.amount = Nuevo; 
    }
}