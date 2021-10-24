import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Bread', 2),
  ];
  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    console.log(ingredient);
  }
}
