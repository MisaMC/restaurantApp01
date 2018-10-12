import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { IngredientsService } from '../services/ingredients.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient [];

  constructor(private ingredientsService: IngredientsService) { }

  ngOnChanges(){
    
  }

  ngOnInit() {
    this.ingredients = this.ingredientsService.getIngredients();
  }

  ngDoCheck(){
    this.ingredients = this.ingredientsService.getIngredients();
  }
  

}
