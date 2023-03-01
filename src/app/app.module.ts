import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './utils/pipes/exponential-strength.pipe';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './pages/intro/intro.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './pages/layout/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    // declares <app-root> custom.define('<app-root>', AppComponent);
    AppComponent,
    // declares {{ | exponentialStrenght: ... }}
    ExponentialStrengthPipe,
    HomeComponent,
    IntroComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, // pipes
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  // <app-root> available during app starting
  bootstrap: [AppComponent]
})
export class AppModule { }
