import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { Router } from "@angular/router";

import { RestangularModule, Restangular } from "ngx-restangular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { RecipesModule } from "./recipes/recipes.module";
import { SavedModule } from "./saved/saved.module";
import { NotFoundComponent } from "./notfound/notfound.component";

import { ClarityModule } from "@clr/angular";

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl("http://localhost:3000");
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ClarityModule,
    FormsModule,
    RecipesModule,
    SavedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  declarations: [AppComponent, NotFoundComponent],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
