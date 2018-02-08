import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Recipe, RecipeService }  from './recipe.service';

@Component({
  template: `
    <ul class="row">
      <li class="" *ngFor="let recipe of recipes$ | async"
        [class.selected]="recipe.id === selectedId">
        <div class="card">
          <div class="card-img">
              <img src="https://source.unsplash.com/356x356/?food,recipe">
          </div>
          <div class="card-block">
              <h4 [routerLink]="['/recipe', recipe.id]" class="card-title">{{recipe.name}}</h4>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, aut.
              Nihil nemo, necessitatibus earum.
              </p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-icon btn-primary">
              <clr-icon shape="add-text"></clr-icon>
              Add
            </button>
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