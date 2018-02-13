import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent }    from './notfound/notfound.component';
import { SavedListComponent } from './saved/saved-list.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'saved', component: SavedListComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },

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