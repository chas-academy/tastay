import { Injectable } from '@angular/core';
import {Restangular} from 'ngx-restangular';

@Injectable()
export class RecipeService {
  constructor(private restangular: Restangular) {}

  getRecipes() {
    let recipes = this.restangular.all("hits").getList();
    return recipes;
  }

  getRecipe(recipeId: number) {
    let recipe = this.restangular.one('hits', recipeId)
    return recipe;
  }

}
