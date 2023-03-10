import { Component } from '@angular/core';
import { AuthService } from 'src/app/utils/services/auth.service';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
        <mat-icon>menu</mat-icon>
      </button>
      <span>My App</span>
      <span class="spacer"></span>
      <!-- possible de gérer avec un composant menu ou plusieurs -->
      <!-- <app-menu *ngIf="..."></app-menu>  -->
      <!-- <app-menu-admin *ngIf="..."></app-menu-admin>  -->
      <ul id="menu">
        <li class="menu-item ml-15" data-testid="link-home">
          <a [routerLink]="'/home'" routerLinkActive="active">Home</a>
        </li>
        <li class="menu-item ml-15" data-testid="link-intro">
          <a routerLink="/intro" routerLinkActive="active">Intro</a>
        </li>
        <li class="menu-item ml-15" *ngIf="authService.isLoggedIn" data-testid="link-product">
          <a routerLink="/product" routerLinkActive="active">Products</a>
        </li>
      </ul>
      <button routerLink="/login" routerLinkActive="active" data-testid="link-login" *ngIf="!authService.isLoggedIn" mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
          <mat-icon>person</mat-icon>
      </button>
      <button *ngIf="authService.isLoggedIn" (click)="authService.logout()" data-testid="link-logout" mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
        <mat-icon>logout</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }

    #menu {
      display: flex;
      list-style-type: none;

      .menu-item {
        /* margin-left: 15px;*/
        a {
          color: white;
          text-decoration: none;

          &.active {
            font-weight: bolder;
          }
        }

      }
    }
  `]
})
export class HeaderComponent {

  constructor(readonly authService: AuthService) { }

}
