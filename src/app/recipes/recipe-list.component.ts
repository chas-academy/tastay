import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import { RecipeService } from './recipe.service';
import { SavedService } from '../saved/saved.service';
import { Recipe } from './recipe.model';
import { Saved } from '../saved/saved.model';

@Component({
  template: `
    <nav class="subnav">
        <ul class="nav">
            <li *ngFor="let filter of filters" class="nav-item">
                <span class="nav-link" (click)="toggleFilter(filter.id)">{{filter.description}}</span>
            </li>
        </ul>
    </nav>
    <ul class="grid" *ngIf="recipes else loading">
      <li *ngFor="let recipe of (recipes | recipeFilter:type)">
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
            <button type="button" class="btn btn-icon btn-primary" (click)="toggleModal(recipe.id)">
              <clr-icon shape="add-text"></clr-icon>
              Add
            </button>
          </div>
        </div>
      </li>
      <ng-template #loading>Loading recipes...</ng-template>
    </ul>
    <div [hidden]="!showModal">
      <div class="modal">
        <div class="modal-dialog" role="dialog" aria-hidden="true">
            <div class="modal-content" *ngIf='lists?.length > 0 else new'>
                <div class="modal-header">
                    <button aria-label="Close" class="close" type="button" (click)="toggleModal()">
                        <clr-icon aria-hidden="true" shape="close"></clr-icon>
                    </button>
                    <h3 class="modal-title">Add recipe to list</h3>
                </div>
                <div class="modal-body">
                  <div class="form-block">
                    <div class="form-group">
                      <label for="selects_1">Select list:</label>
                      <div class="select">
                        <select id="selects_1" #selectedList>
                          <option *ngFor="let list of lists" [value]="list.id">{{ list.title }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-outline" type="button" (click)="toggleModal()">Cancel</button>
                    <button class="btn btn-primary" type="button" (click)="addRecipe(selectedList.value)">Ok</button>
                </div>
            </div>
            <ng-template #new>
              <div class="modal-content" >
                  <div class="modal-header">
                      <button aria-label="Close" class="close" type="button" (click)="toggleModal()">
                          <clr-icon aria-hidden="true" shape="close"></clr-icon>
                      </button>
                      <h3 class="modal-title">Create new list</h3>
                      <p>Whoops, you have no lists yet! :(<br/>
                      Create a new one and then add this recipe to it.</p>
                  </div>
                  <div class="modal-body">
                    <div class="form-block">
                      <div class="form-group">
                        <label for="list_name">Name your list:</label>
                        <div class="form-group">
                          <label class="required"></label>
                          <input type="text" name="list_name" required id="requiredInput" placeholder="List name goes here" #listTitle>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                      <button class="btn btn-outline" type="button" (click)="toggleModal()">Cancel</button>
                      <button class="btn btn-primary" type="button" (click)="addList(listTitle.value)">Create list</button>
                  </div>
              </div>
            </ng-template>
        </div>
      </div>
      <div class="modal-backdrop" aria-hidden="true"></div>
    </div>
  `
})
export class RecipeListComponent implements OnInit {
  filters: any[];
  recipes: Recipe[];
  lists: Saved[];
  toggle: boolean;

  get type()   { return this.toggle ? 'Sugar-Conscious' : ''; }

  private selectedId: number;
  private listTitle: string;
  private showModal: boolean;

  constructor(
    private recipeService: RecipeService,
    private savedService: SavedService
  ) {
    this.filters = [
      {
        id: 0,
        description: 'All'
      },
      {
        id: 1,
        description: 'Gluten'
      },
      {
        id: 2,
        description: 'Lactose'
      },
      {
        id: 3,
        description: 'Low fat'
      },
      {
        id: 4,
        description: 'Balanced'
      },
    ];
  }

  ngOnInit() {
     this.recipeService.getRecipes().subscribe(res => this.recipes = res);
     this.savedService.getLists().subscribe(res => this.lists = res);
  }

  toggleModal(recipeId: number) {
    this.selectedId = recipeId;
    this.showModal = !this.showModal;
  }

  toggleFilter() {
    this.toggle = !this.toggle;
  }

  addRecipe(listId: number) {
    this.savedService.addRecipeToList(listId, this.selectedId);
    this.showModal = !this.showModal;
  }

  addList(listTitle: string) {
    this.savedService.createList(listTitle);
    this.showModal = !this.showModal;
  }
}
