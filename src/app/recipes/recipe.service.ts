import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RequestOptions } from '@angular/http';

@Injectable()
export class RecipeService {
  constructor(
    private http: HttpClient
  ) {}

  getRecipes() {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser')).data.access_token}`
      })
    };

    return this.http.get<any>('http://api.tastay.test/api/recipe', options)
      .map(res => {
        debugger;
      });
  }

  getRecipe(id: number | string) {
    // Back to http here too
  }
}
