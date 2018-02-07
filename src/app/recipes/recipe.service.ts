import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Recipe {
  constructor(public id: number, public name: string) { }
}

const RECIPES = [
  new Recipe(0, 'Roasted Eggplant with Avocado Creme'),
  new Recipe(1, 'Pizza deluxe with buffalo mozzarella'),
  new Recipe(2, 'Pasta Carbonara'),
  new Recipe(3, 'Chipotle Chicken Skewers'),
  new Recipe(4, 'Broccoli Chedder Quinoa Bites'),
  new Recipe(5, 'Vegan Mac & Cheese Sandwhich')
];

@Injectable()
export class RecipeService {
  getRecipes() { return Observable.of(RECIPES); }

  getRecipe(id: number | string) {
    return this.getRecipes()
      // (+) before `id` turns the string into a number
      .map(recipes => recipes.find(recipe => recipe.id === +id));
  }
}