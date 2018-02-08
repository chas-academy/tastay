import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="main-container">
    <header class="header-6">
      <div class="branding">
        <a class="nav-link" href="javascript://">
          <clr-icon shape="flame" class="is-solid"></clr-icon>
          <span class="title">Tastay</span>
        </a>
      </div>
      <div class="header-nav">
          <a routerLink="/recipes" routerLinkActive="active" class="nav-link nav-text">Recipes</a>
          <a routerLink="/saved" routerLinkActive="active" class="nav-link nav-text">My recipes</a>
      </div>
      <div class="header-actions">
          <a href="javascript://" class="nav-link nav-icon">
              <clr-icon shape="cog"></clr-icon>
          </a>
      </div>
    </header>
    <div class="content-container">
      <div class="content-area container-fluid">
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>
  `
})
export class AppComponent {
}