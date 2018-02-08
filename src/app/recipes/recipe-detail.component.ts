import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Recipe, RecipeService }  from './recipe.service';

@Component({
  template: `
  <div *ngIf="recipe$ | async as recipe">
    <h3>"{{ recipe.name }}"</h3>
    <div>
      <label>Id: </label>{{ recipe.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="recipe.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoRecipes(recipe)">Back</button>
    </p>
  </div>
  `
})
export class RecipeDetailComponent implements OnInit {

  recipe$: Observable<Recipe>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RecipeService
  ) {}

  ngOnInit() {
    this.recipe$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getRecipe(params.get('id')));
  }

  gotoRecipes(recipe: Recipe) {
    let recipeId = recipe ? recipe.id : null;
    // Pass along the recipe id if available
    // so that the RecipeListComponent can select that recipe.
    // Include a duration property just because we can.
    this.router.navigate(['/recipes', { id: recipeId, duration: '1h 15m' }]);
  }
}