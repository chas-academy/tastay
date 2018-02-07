import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Recipe, RecipeService }  from './recipe.service';

@Component({
  template: `
    <h2>Recipes</h2>
    <ul class="row">
      <li class="col-lg-2" *ngFor="let recipe of recipes$ | async"
        [class.selected]="recipe.id === selectedId">
        <div class="card">
          <div class="card-img">
              <img src="https://placehold.it/350x120">
          </div>
          <div class="card-block">
              <h4 [routerLink]="['/recipe', recipe.id]" class="card-title">{{recipe.name}}</h4>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, aut.
              Nihil nemo, necessitatibus earum.
              </p>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">Lorem ipsum dolor.</li>
              <li class="list-group-item">Lorem ipsum dolor sit.</li>
              <li class="list-group-item">Lorem ipsum.</li>
          </ul>
          <div class="card-footer">
              <a href="..." class="btn btn-sm btn-link">Action 1</a>
              <a href="..." class="btn btn-sm btn-link">Action 2</a>
          </div>
        </div>
      </li>
    </ul>
  `
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<Recipe[]>;

  private selectedId: number;

  constructor(
    private service: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getRecipes();
      });
  }
}