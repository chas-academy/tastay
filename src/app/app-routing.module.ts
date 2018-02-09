import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent }    from './notfound/notfound.component';
import { SavedListComponent } from './saved/saved-list.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'saved', component: SavedListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }