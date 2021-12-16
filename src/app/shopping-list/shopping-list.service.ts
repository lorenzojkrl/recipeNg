import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingredientsChange = new EventEmitter<Ingredient[]>(); // inform other Comp that ingredients changed

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Bread', 2),
  ];

  getIngredients() {
    return this.ingredients.slice(); // returns a copy of the array, won't reflect changes
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice()); // return new array + change
    console.log(ingredient);
  }
}
