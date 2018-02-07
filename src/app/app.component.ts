import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <header class="header-6">
    <div class="branding">
      <a class="nav-link" href="javascript://">
        <clr-icon shape="thumbs-up"></clr-icon>
        <span class="title">Tastay</span>
      </a>
    </div>
    <div class="header-nav">
        <a routerLink="/recipes" routerLinkActive="active" class="nav-link nav-text">My recipes</a>
    </div>
    <div class="header-actions">
        <a href="javascript://" class="nav-link nav-icon">
            <clr-icon shape="cog"></clr-icon>
        </a>
    </div>
  </header>
  <div class="content-area">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
}