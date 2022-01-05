import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChange = new Subject<Ingredient[]>(); // inform other Comp that ingredients changed

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Bread', 2),
  ];

  getIngredients() {
    return this.ingredients.slice(); // returns a copy of the array, won't reflect changes
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // this.ingredientsChange.emit(this.ingredients.slice()); // return new array + change
    this.ingredientsChange.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); // add all ingredients, then emit 1 single event.
    //Spread operator turns array of elements into a list which are then pushed
    this.ingredientsChange.next(this.ingredients.slice()); // return new array + change
  }
}
