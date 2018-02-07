import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeListComponent }    from './recipe-list.component';
import { RecipeDetailComponent }  from './recipe-detail.component';

const recipesRoutes: Routes = [
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipe/:id',  component: RecipeDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/