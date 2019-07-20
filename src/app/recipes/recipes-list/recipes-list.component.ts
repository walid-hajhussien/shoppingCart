import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output()recipeWasSelected=new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'just a test recipe',
      'https://www.skinnytaste.com/wp-content/uploads/2019/07/Perfectly-Grilled-Zucchini-11-1.jpg')
  ];


  constructor() { }

  ngOnInit() {
  }

  onItemSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
