import { Recipe } from "../recipes/recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private  recipes: Recipe[] = [
        new Recipe('A test recipe 1','comida','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDm5SLUfug87dqCTnJCZxQ2SMpMvB_dOvIFK9XopwSjCw7jKbS7Q'),
        new Recipe('A test recipe 2','tengo hambre xd','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDm5SLUfug87dqCTnJCZxQ2SMpMvB_dOvIFK9XopwSjCw7jKbS7Q'),
        new Recipe('A test recipe 3','this is a simply test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDm5SLUfug87dqCTnJCZxQ2SMpMvB_dOvIFK9XopwSjCw7jKbS7Q')
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}