import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Gnocchi',
  //     'Pasta',
  //     'https://cdn.pixabay.com/photo/2015/07/12/18/56/gnocchi-842305__340.jpg',
  //     [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
  //   ),
  //   new Recipe(
  //     'Gnocchi alla Fioretta',
  //     'Pasta',
  //     'https://cdn.pixabay.com/photo/2020/01/16/14/22/food-4770756__340.jpg',
  //     [
  //       new Ingredient('Ragu', 1),
  //       new Ingredient('Gnocchi', 20),
  //       new Ingredient('Fioretta', 10),
  //     ]
  //   ),
  //   new Recipe(
  //     'Gnocchi di Patate',
  //     'Pasta',
  //     'https://cdn.pixabay.com/photo/2018/03/01/13/04/gnocchi-3190639__340.jpg',
  //     [new Ingredient('Ragu', 1), new Ingredient('Gnocchi', 20)]
  //   ),
  //   new Recipe(
  //     "Gnocchi all'Anitra",
  //     'Pasta',
  //     'https://cdn.pixabay.com/photo/2015/03/14/13/34/turkey-673148__340.jpg',
  //     [
  //       new Ingredient('Ragu', 1),
  //       new Ingredient('Gnocchi', 20),
  //       new Ingredient('Anitra', 1),
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];
  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    // inform subscribers that the recipes have changed
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice(); // .slice() with no arguments returns a copy of the array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
