import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { RecipeListComponent } from './recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail.component';

import { RecipeService } from './recipe.service';
import { RecipesRoutingModule } from './recipes-routing.module';

import { RecipeFilterPipe } from './recipes-pipe';
import { AuthGuard } from '../guard/auth-guard.service';

@NgModule({
  imports: [
    ClarityModule,
    CommonModule,
    FormsModule,
    RecipesRoutingModule
  ],
  declarations: [
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeFilterPipe
  ],
  providers: [RecipeService, AuthGuard]
})
export class RecipesModule { }
