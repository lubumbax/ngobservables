import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'form-control',
  template: `
  Reactive Form
  <form [formGroup]="form">
    <div><input type="text" [formControl]="name"></div>
  </form>
  <div> {{ changeLog }} </div>
  `
})
export class FormControlComponent {
  changeLog: string[] = [];
  form: FormGroup;
  name: FormControl;

  constructor(private fb: FormBuilder) { 
    this.name = new FormControl();
    this.form = fb.group({
      text: this.name
    });
    this.name.valueChanges.forEach(
      (value: string) => {
        console.log("* Change: " + value);
        this.changeLog.push(value);
      }
    );
  }
}