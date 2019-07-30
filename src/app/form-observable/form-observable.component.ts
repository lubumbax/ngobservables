import { Component } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'form-observable',
  template: `
  <form [formGroup]="form">
    <input formControlName="text"> Reversed: {{reversed}}
  </form>
  `
})
export class FormObservableComponent {
  text: FormControl;
  form: FormGroup;
  reversed: string;

  constructor(private fb: FormBuilder) { 
    this.text = new FormControl();

    this.form = fb.group({
      text: this.text
    });

    this.text.valueChanges
      .map(n => n.split('').reverse().join(''))
      .subscribe(value => this.reversed = value);
  }

}
