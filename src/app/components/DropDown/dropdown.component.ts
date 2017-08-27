import { Component,Input,Output, EventEmitter, ElementRef } from '@angular/core';

export class DropdownValue {
    value:string;
    label:string;
  
    constructor(value:string,label:string) {
      this.value = value;
      this.label = label;
    }
  }
  
  @Component({
    selector: 'dropdown',
    template: `
      <ul>
        <li *ngFor="let value of values" (click)="select(value.value)">{{value.label}}</li>
      </ul>
    `
  })
  export class DropdownComponent {
    @Input()
    values: DropdownValue[];
  
    @Input()
    value: string[];
  
    @Output()
    valueChange: EventEmitter<string>;
  
    constructor(private elementRef:ElementRef) {
      this.valueChange = new EventEmitter();
    }
  
    select(value) {
      this.valueChange.emit(value);
    }
  }