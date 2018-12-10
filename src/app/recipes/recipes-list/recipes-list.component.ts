import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from'../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  private sure: Subscription;
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute){}
  //@Output() recipeItem = new EventEmitter<Recipe>();
 

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.sure= this.recipeService.RecipeEmit.subscribe((event)=>{
      this.recipes = this.recipeService.getRecipes();
    })
  }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  
  ngOnDestroy(){
    this.sure.unsubscribe();
  }

}
