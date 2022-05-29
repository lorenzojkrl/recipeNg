import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';

// Theoretically, this is not mandatory
// it is necessary when we inject a service (HttpClient) into a service
@Injectable({ providedIn: 'root' })
export class DataStorageService {
  recipesUrl =
    'https://recipe-book-45cb0-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';

  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    // Firebase reset data when using the HTTP PUT method
    this.http.put(this.recipesUrl, recipes).subscribe(console.log);
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(this.recipesUrl).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipesService.setRecipes(recipes);
      })
    );
  }
}
