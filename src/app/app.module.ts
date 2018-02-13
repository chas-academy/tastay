import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { RestangularModule, Restangular } from 'ngx-restangular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RecipesModule } from './recipes/recipes.module';
import { SavedModule } from './saved/saved.module';
import { NotFoundComponent } from './notfound/notfound.component';

import { ClarityModule } from '@clr/angular';

import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000');
}

import { JwtModule } from '@auth0/angular-jwt';

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
    RestangularModule.forRoot(RestangularConfigFactory),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['http://api.tastay.test']
      }
    })
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent
  ],
  providers: [HttpClientModule, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
