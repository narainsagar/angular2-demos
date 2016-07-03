import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-demos',
  templateUrl: 'demos.component.html',
  styleUrls: ['demos.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class DemosComponent implements OnInit {
  
  title = 'demos works!';

  constructor(public location:Location) {}

  ngOnInit() {}

  getLinkStyle(path) {
  	return this.location.path().indexOf(path) > -1;
  }

}
