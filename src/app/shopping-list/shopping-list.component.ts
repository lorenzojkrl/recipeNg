import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingChangeSubscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    // subscribe to changes in ingredient list
    this.ingChangeSubscription =
      this.shoppingListService.ingredientsChange.subscribe(
        (ingredientsList: Ingredient[]) => {
          this.ingredients = ingredientsList;
        }
      );
  }

  ngOnDestroy(): void {
    this.ingChangeSubscription.unsubscribe();
  }
}
