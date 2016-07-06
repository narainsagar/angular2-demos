// main entry point
import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppComponent, environment, APP_ROUTER_PROVIDERS } from './app';
import { FormFieldService } from './app/angular2-multi-component-form-builder';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FormFieldService,
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS
])
.catch(err => console.error(err));

