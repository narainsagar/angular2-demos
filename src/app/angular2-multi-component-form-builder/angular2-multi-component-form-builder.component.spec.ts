/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { Angular2MultiComponentFormBuilderComponent } from './angular2-multi-component-form-builder.component';
import { Location } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
/*
describe('Component: Angular2MultiComponentFormBuilder', () => {
  it('should create an instance', () => {
    let component = new Angular2MultiComponentFormBuilderComponent();
    expect(component).toBeTruthy();
  });
});
*/

beforeEachProviders(() => [Angular2MultiComponentFormBuilderComponent, Location, ROUTER_DIRECTIVES]);

describe('App: Angular2MultiComponentFormBuilderComponent', () => {
  it('should create the app',
      inject([Angular2MultiComponentFormBuilderComponent], (app: Angular2MultiComponentFormBuilderComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Angular2 Multi Component Dynamic Form Builder Demo!\'',
      inject([Angular2MultiComponentFormBuilderComponent], (app: Angular2MultiComponentFormBuilderComponent) => {
    expect(app.title).toEqual('Angular2 Multi Component Dynamic Form Builder Demo!');
  }));
});
