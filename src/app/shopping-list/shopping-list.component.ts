import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../share/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

  addIngrediant(value: Ingredient) {
    this.ingredients.push(value);
  }

}
