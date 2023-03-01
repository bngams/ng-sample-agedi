import { Component } from '@angular/core';

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
        <li class="menu-item ml-15">
          <a [routerLink]="'/home'" routerLinkActive="active">Home</a>
        </li>
        <li class="menu-item ml-15">
          <a routerLink="/intro" routerLinkActive="active">Intro</a>
        </li>
        <li class="menu-item ml-15">
          <a routerLink="/product" routerLinkActive="active">Products</a>
        </li>
      </ul>
      <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
        <mat-icon>person</mat-icon>
      </button>
      <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
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
}
