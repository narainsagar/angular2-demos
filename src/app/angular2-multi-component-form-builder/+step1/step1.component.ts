import { Component, OnInit } from '@angular/core';
import { ControlGroup, AbstractControl } from '@angular/common';

import { FormManager, FormFieldComponent, FormField } from '../shared';
import { REGIONS } from '../dump-data';

@Component({
  moduleId: module.id,
  selector: 'app-angular2-multi-component-form-builder-step1',
  templateUrl: 'step1.component.html',
  styleUrls: ['step1.component.css'],
  directives: [FormFieldComponent]
})
export class Step1Component implements OnInit {

  regions = REGIONS;
  selectedArea: string;     
  step1: AbstractControl;

  constructor(private fm: FormManager) {
    this.step1 = fm.mainForm.controls['step1'];
    
    let regionField = fm.getField('input_region')[0];
    regionField.options = Object.keys(this.regions);
    this.updateLocationFied(null);
  }

  ngOnInit() {}
  
  updateLocationFied($event) {
    let regionControl = this.fm.getField('input_region')[1];
    if(regionControl.value) {
      let areaField = this.fm.getField('input_area')[0];
      areaField.options = Object.keys(this.regions[regionControl.value]);
      this.selectedArea = areaField.options[0];
    }
    
    if($event) {
      this.update($event.field, $event.value);
    }
  }
  
  update(field: FormField, value: any) {
    this.fm.valueUpdated(field, value);
  }

}
