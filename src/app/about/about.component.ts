import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AboutComponent implements OnInit {
  
  title = 'about works!';
  id: string;

  constructor() {
  	// this.id = params.get('id');
  	// console.log(data.get('project'));
  }

  ngOnInit() {}

}
