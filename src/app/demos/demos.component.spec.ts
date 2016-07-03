/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { DemosComponent } from './demos.component';
import { Location } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

/*
describe('Component: Demos', () => {
  it('should create an instance', () => {
    let component = new DemosComponent();
    expect(component).toBeTruthy();
  });
});
*/

beforeEachProviders(() => [DemosComponent, Location, ROUTER_DIRECTIVES]);

describe('App: DemosComponent', () => {
  it('should create the app',
      inject([DemosComponent], (app: DemosComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'demos works!\'',
      inject([DemosComponent], (app: DemosComponent) => {
    expect(app.title).toEqual('demos works!');
  }));
});
