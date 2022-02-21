import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingredientsChange = new Subject<Ingredient[]>(); // inform other Comp that ingredients changed
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Bread', 2),
  ];

  getIngredients() {
    return this.ingredients.slice(); // returns a copy of the array, won't reflect changes
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.next(this.ingredients.slice()); // return new array + change
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); // add all ingredients, then emit 1 single event.
    //Spread operator turns array of elements into a list which are then pushed
    this.ingredientsChange.next(this.ingredients.slice()); // return new array + change
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChange.next(this.ingredients.slice());
  }
}
