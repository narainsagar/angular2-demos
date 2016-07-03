import { provideRouter, RouterConfig } from '@angular/router';

import { Angular2MultiComponentFormBuilderComponent, Step1Component, Step2Component } from './angular2-multi-component-form-builder';
import { AboutComponent } from './about';
import { DemosComponent } from './demos';

export const ROUTES: RouterConfig = [
  {
    path: '',
    redirectTo: '/about',
    terminal: true
  },
  {
  	path: 'about',
  	component: AboutComponent
  },
  {
    path: 'multi-component-form-builder',
    component: Angular2MultiComponentFormBuilderComponent,
    children: [
      {
        path: '',
        component: Step1Component
      },
      {
        path: 'step1',
        component: Step1Component
      },
      {
        path: 'step2',
        component: Step2Component
      }
    ]
  },
  {
  	path: 'demos',
  	component: DemosComponent,
  	children: []
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(ROUTES)
];