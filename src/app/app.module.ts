import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './utils/pipes/exponential-strength.pipe';

@NgModule({
  declarations: [
    // declares <app-root> custom.define('<app-root>', AppComponent);
    AppComponent,
    // declares {{ | exponentialStrenght: ... }}
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // <app-root> available during app starting
  bootstrap: [AppComponent]
})
export class AppModule { }
