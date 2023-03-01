import { LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  // providers => injector => inject LOCALE_ID value 
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }]
});