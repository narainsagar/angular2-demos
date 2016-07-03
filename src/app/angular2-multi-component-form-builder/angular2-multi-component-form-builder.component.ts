import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { SidebarComponent } from './sidebar';
import { FormManager } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-angular2-multi-component-form-builder',
  templateUrl: 'angular2-multi-component-form-builder.component.html',
  styleUrls: ['angular2-multi-component-form-builder.component.css'],
  directives: [ROUTER_DIRECTIVES, SidebarComponent],
  providers: [FormManager]
})
export class Angular2MultiComponentFormBuilderComponent implements OnInit {
  
  title = 'Angular2 Multi Component Dynamic Form Builder Demo!';

  constructor(public location:Location) {}

  ngOnInit() {}

  getLinkStyle(path) {
  	return this.location.path().indexOf(path) > -1;
  }

}
