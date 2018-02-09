import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';

@Component({
  template: `
  <div class="recipe-container" *ngIf="recipe">
    <div class="card">
      <div class="card-img" [style.background]="'url(' + recipe.photoPath + ')'"></div>
      <div class="card-block">
          <h4 class="card-title">{{recipe.title}}</h4>
          <p class="card-text">
            Some nice words here
          </p>
      </div>
    </div>
    <div class="recipe-ingredients">
      <h2>Ingredients</h2>
      <ul class="list">
        <li *ngFor="let ingredient of recipe.ingredients">
          {{ingredient}}
        </li>
      </ul>
    </div>
    <div class="recipe-actions">
      <div class="btn-group btn-primary">
        <button class="btn" (click)="gotoRecipes(recipe)">
          <clr-icon shape="caret" style="transform: rotate(270deg);"></clr-icon>
          Back
        </button>
        <a href={{recipe.url}} target="_blank" title="Opens the instructions for this recipe in a new tab" class="btn btn-success">
          <clr-icon shape="list"></clr-icon>
          Read instructions
        </a>
        <button class="btn">
          <clr-icon shape="star"></clr-icon>
          Save
        </button>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .recipe-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card {
      padding: 30px 0;
      background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      box-shadow: none;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
    .card-img {
      border: 15px solid #fff;
      padding: 10px;
      width: 300px;
      background-position: 50% 50%;
      height: 300px;
    }
    .card-text {
      opacity: 1;
      max-height: 4.153846153846154em;
      width: auto;
    }
    .recipe-ingredients {
      position: absolute;
      bottom: calc(50vh / 3);
    }
    .recipe-actions {
      position: absolute;
      bottom: 0;
    }
  `]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RecipeService
  ) {}

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getRecipe(id)
      .subscribe(recipe => {
        this.recipe = new Recipe(
          recipe.id,
          recipe.url,
          recipe.label,
          recipe.image,
          recipe.ingredientLines,
          recipe.healthLabels
        );
      });
  }

  gotoRecipes(recipe: Recipe) {
    let recipeId = recipe ? recipe.id : null;
    this.router.navigate(['/recipes']);
  }
}
