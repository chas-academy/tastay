import { Component, OnInit } from '@angular/core';

import { SavedService } from './saved.service';
import { Saved } from '../saved/saved.model';

@Component({
  template: `
  <ul class="row" *ngIf="lists else loading">
    <li *ngFor="let list of lists">
      <div class="card">
        <div class="card-img">
            <img src='http://placehold.it/356'>
        </div>
        <div class="card-block" routerLink="/saved/{{list.id}}/recipes">
            <h4 class="card-title">
              {{list.title}}<br/>
              <span class="badge">{{ list.recipes.length }} recipes</span>
            </h4>
        </div>
        <div class="card-footer">
          <button type="button" class="btn btn-icon btn-danger" (click)="deleteList(list.id)">
            Delete
          </button>
        </div>
      </div>
    </li>
    <ng-template #loading>Loading recipes...</ng-template>
  </ul>
  `,
})
export class SavedListComponent implements OnInit {
  lists: Saved[];

  constructor(
    private savedService: SavedService
  ) { }

  ngOnInit() {
    this.savedService.getLists().subscribe(res => this.lists = res);
  }

  deleteList(listId: number) {
    this.savedService.deleteList(listId);
  }

}
