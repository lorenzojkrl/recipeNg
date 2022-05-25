import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';

// Theoretically, this is not mandatory
// it is necessary when we inject a service (HttpClient) into a service
@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    // Firebase reset data when using the HTTP PUT method
    this.http
      .put(
        'https://recipe-book-45cb0-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe(console.log);
  }
}
