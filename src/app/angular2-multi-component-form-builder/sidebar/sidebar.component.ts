import { Component, OnInit } from '@angular/core';
import { FormManager } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-angular2-multi-component-form-builder-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  title: string = "Sidebar";

  constructor(public fm: FormManager) {}

  ngOnInit() {}

  isValid(step: string) {
    return this.fm.mainForm['controls'][step]['valid'];
  }

}
