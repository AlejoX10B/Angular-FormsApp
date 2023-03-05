import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  person = {
    gender: 'F',
    notifications: false
  }

  switchForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    termsAndConds: [false, Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.switchForm.reset(this.person);

    this.switchForm.valueChanges.subscribe(({ termsAndConds, ...rest}) => {
      this.person = rest;
    });
  }

  onSubmit() {
    const form = { ...this.switchForm.value };
    delete form.termsAndConds;

    this.person = form;
  }

}
