import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { IngredientsService } from "./ingredients.service";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private  recipes: Recipe[] = [
        new Recipe('A test recipe 1','comida','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDm5SLUfug87dqCTnJCZxQ2SMpMvB_dOvIFK9XopwSjCw7jKbS7Q',
        [
          new Ingredient('bread', 2),
          new Ingredient('cheese', 4)
        ]),
        new Recipe('A test recipe 2','tengo hambre xd','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDm5SLUfug87dqCTnJCZxQ2SMpMvB_dOvIFK9XopwSjCw7jKbS7Q',
        [
          new Ingredient('Apple', 8 )
        ]),
        new Recipe('A test recipe 3','this is a simply test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDm5SLUfug87dqCTnJCZxQ2SMpMvB_dOvIFK9XopwSjCw7jKbS7Q',
        [
          new Ingredient('Orange', 5),
          new Ingredient('Banana', 1)
        ])
      ];
      constructor(private ingredientsService: IngredientsService){

      }

      getRecipes(){
          return this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.ingredientsService.addIngredients(ingredients);
      }
}