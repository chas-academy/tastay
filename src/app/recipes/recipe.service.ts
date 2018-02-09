import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';

@Injectable()
export class RecipeService {
  constructor(
    private restangular: Restangular
  ) {}

  getRecipes() {
    return this.restangular.all('hits').getList();
  }

  getRecipe(id: number | string) {
    return this.restangular.one('hits', id).get();
  }
}
