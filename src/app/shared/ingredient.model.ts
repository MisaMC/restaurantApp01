export class Ingredient{
   

    constructor(public name:string, public amount:number){
    }
    getIngredient(newin:number){
        this.amount = newin; 
    }
}