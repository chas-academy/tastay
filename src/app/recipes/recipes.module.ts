import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ClarityModule } from "@clr/angular";

import { RecipeListComponent }    from './recipe-list.component';
import { RecipeDetailComponent }  from './recipe-detail.component';

import { RecipeService } from './recipe.service';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  imports: [
    ClarityModule,
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