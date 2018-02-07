import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { RecipeListComponent }    from './recipe-list.component';
import { RecipeDetailComponent }  from './recipe-detail.component';

import { RecipeService } from './recipe.service';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RecipesRoutingModule
  ],
  declarations: [
    RecipeListComponent,
    RecipeDetailComponent
  ],
  providers: [ RecipeService ]
})
export class RecipesModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/