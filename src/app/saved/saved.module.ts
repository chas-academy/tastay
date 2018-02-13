import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { SavedListComponent } from './saved-list.component';
import { SavedDetailComponent } from './saved-detail.component';

import { SavedRoutingModule } from './saved-routing.module';
import { AuthGuard } from '../guard/auth-guard.service';
import { SavedService } from './saved.service';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    SavedRoutingModule
  ],
  declarations: [
    SavedListComponent,
    SavedDetailComponent
  ],
  providers: [
    SavedService,
    AuthGuard
  ]
})
export class SavedModule { }
