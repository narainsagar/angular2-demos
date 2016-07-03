import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

  title = 'angular2 demos!';

  constructor(private location: Location) {}

  getLinkStyle(path) {
  	if(path === this.location.path()){
        return true;
    } else if(path.length > 0){
        return this.location.path().indexOf(path) > -1;
    }
  }

}
