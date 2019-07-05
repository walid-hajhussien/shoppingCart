import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

// we use @NgModule to defined module
// declarations : defined the component for the module
// import the module which will be used inside this module
// bootstrap : defined the first module which will be executed
@NgModule({
  declarations: [AppComponent, ServerComponent, HeaderComponent, RecipesComponent,
    RecipesListComponent, RecipesDetailComponent, RecipesItemComponent, ShoppingListComponent, ShoppingEditComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
