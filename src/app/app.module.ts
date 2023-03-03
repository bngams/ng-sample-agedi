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
import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // declares <app-root> custom.define('<app-root>', AppComponent);
    AppComponent,
    // declares {{ | exponentialStrenght: ... }}
    ExponentialStrengthPipe,
    HomeComponent,
    IntroComponent,
    NotFoundComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, // pipes
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule   
  ],
  providers: [],
  // <app-root> available during app starting
  bootstrap: [AppComponent]
})
export class AppModule { }
