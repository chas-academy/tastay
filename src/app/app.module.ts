import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';

import { RecipesModule }           from './recipes/recipes.module';
import { NotFoundComponent }   from './notfound/notfound.component';

import { ClarityModule } from "@clr/angular";

@NgModule({
  imports: [
    BrowserModule,
    ClarityModule,
    FormsModule,
    RecipesModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}