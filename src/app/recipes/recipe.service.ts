import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Gnocchi',
      'Pasta',
      'https://cdn.pixabay.com/photo/2015/07/12/18/56/gnocchi-842305__340.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Gnocchi alla Fioretta',
      'Pasta',
      'https://cdn.pixabay.com/photo/2020/01/16/14/22/food-4770756__340.jpg',
      [
        new Ingredient('Ragu', 1),
        new Ingredient('Gnocchi', 20),
        new Ingredient('Fioretta', 10),
      ]
    ),
    new Recipe(
      'Gnocchi di Patate',
      'Pasta',
      'https://cdn.pixabay.com/photo/2018/03/01/13/04/gnocchi-3190639__340.jpg',
      [new Ingredient('Ragu', 1), new Ingredient('Gnocchi', 20)]
    ),
    new Recipe(
      "Gnocchi all'Anitra",
      'Pasta',
      'https://cdn.pixabay.com/photo/2015/03/14/13/34/turkey-673148__340.jpg',
      [
        new Ingredient('Ragu', 1),
        new Ingredient('Gnocchi', 20),
        new Ingredient('Anitra', 1),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // .slice() with no arguments returns a copy of the array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
