import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { SavedService } from './saved.service';
import { Saved } from './saved.model';
import { Observable } from 'rxjs/Observable';

@Component({
  template: `
    <div *ngIf="list else empty">
    <h2>{{list.title}}</h2>
    <ul class="grid" *ngIf="list.recipes?.length > 0 else empty">
      <li *ngFor="let recipe of list.recipes">
        <div class="card">
          <div class="card-img">
              <img [src]="recipe.image">
          </div>
          <div class="card-block" routerLink="/recipe/{{recipe.id}}">
              <h4 class="card-title">{{recipe.label}}</h4>
              <p class="card-text">
              </p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-icon btn-primary" (click)="removeRecipe(list.id, recipe.id)">
              <clr-icon shape="times-circle"></clr-icon>
                Remove
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <ng-template #empty>
    <h3>This list is empty, go add some recipes you!</h3>
    <a class="btn btn-success" routerLink="/recipes">Explore recipes</a>
  </ng-template>
  `
})
export class SavedDetailComponent implements OnInit {
  list: Saved[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SavedService
  ) {}

  ngOnInit() {
    this.getList();
  }

  getList() {
    const listId = +this.route.snapshot.paramMap.get('id');
    /**
     * Please forgive me
     */
    this.service.getList(listId).subscribe((resolvableArray: any) => {
      return resolvableArray.forEach(observable => {
        return observable.subscribe(list => {
          return this.list = list;
        });
      });
    });
  }

  removeRecipe(listId: number, recipeId: number) {
    return this.service.removeRecipeFromList(listId, recipeId).subscribe(res => {
      res.recipes = res.recipes.filter(id => id !== recipeId);
      this.list = res.plain();
      res.save();
    });
  }
}
