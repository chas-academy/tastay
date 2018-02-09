import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SavedListComponent } from './saved-list.component';
import { SavedDetailComponent } from './saved-detail.component';

const savedRoutes: Routes = [
  { path: 'saved', component: SavedListComponent },
  { path: 'saved/:id/recipes',  component: SavedDetailComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(savedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SavedRoutingModule { }

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/