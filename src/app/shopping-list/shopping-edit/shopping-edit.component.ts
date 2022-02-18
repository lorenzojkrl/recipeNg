import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  // Local ref is not needed when using template driven forms
  // @ViewChild('nameInput', { static: false }) nameInputReference: ElementRef;
  // @ViewChild('amountInput', { static: false }) amountInputReference: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem(f: NgForm) {
    // Not using local ref
    // const ingredientName = this.nameInputReference.nativeElement.value;
    // const ingredientAmount = this.amountInputReference.nativeElement.value;
    const value = f.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    this.shoppingListService.addIngredient(newIngredient);
  }
}
