import { Recipe } from './recipe.model';
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Gnocchi',
      'Pasta',
      'https://cdn.pixabay.com/photo/2015/07/12/18/56/gnocchi-842305__340.jpg'
    ),
    new Recipe(
      'Gnocchi alla Fioretta',
      'Pasta',
      'https://cdn.pixabay.com/photo/2020/01/16/14/22/food-4770756__340.jpg'
    ),
    new Recipe(
      'Gnocchi di Patate',
      'Pasta',
      'https://cdn.pixabay.com/photo/2018/03/01/13/04/gnocchi-3190639__340.jpg'
    ),
    new Recipe(
      "Gnocchi all'Anitra",
      'Pasta',
      'https://cdn.pixabay.com/photo/2015/03/14/13/34/turkey-673148__340.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); // .slice() with no arguments returns a copy of the array
  }
}
