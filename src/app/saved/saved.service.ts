import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { Restangular } from 'ngx-restangular';
import { Saved } from './saved.model';

@Injectable()
export class SavedService {
  constructor(
    private http: HttpClient,
    private restangular: Restangular
  ) { }

  addRecipeToList(listId: number, recipeId: number) {
    this.restangular.one('saved', listId).get().subscribe(res => {
      res.recipes.push(recipeId);
      res.save();
    });
  }

  removeRecipeFromList(listId: number, recipeId: number) {
    this.restangular.one('saved', listId).get().subscribe(res => {
      res.recipes = res.recipes.filter(id => id !== recipeId);
      res.save();
    });

    this.getList(listId); // ruh-oh (Said scooby)
  }

  getLists() {
    return this.restangular.all('saved').getList();
  }

  getList(listId: number) {
    // 1 Fetch list - done
    // 2 When list is here, get that lists recipes ids: from the recipes[] array - done
    // 3 map over the ids - done
    // 4 make subsequent requests for each of the ids - MEEEEP
    // replace the ids inside recipes[] array on the outer list object
    // return... have a beer, be happy
    const recipes: any[] = [];

    return this.http.get(`http://localhost:3000/saved/${listId}`)
      .pipe(
        map((list: any) => {
          return list.recipes.map((recipeId: any) => {
            return this.http.get(`http://localhost:3000/hits/${recipeId}`)
              .pipe(
                map((res: any) => {
                  recipes.push(res);
                  list.recipes = recipes;
                  return list;
                })
              );
          });
        })
      );
  }

  createList(listTitle: string) {
    return this.restangular.all('saved').post({ 'title': listTitle, 'recipes': [] });
  }

  deleteList(listId: number) {
    return this.restangular.one('saved', listId).remove();
  }

}
