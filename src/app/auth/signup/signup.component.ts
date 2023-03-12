import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as v from '../../shared/validators/validators';
import { EmailValidatorService } from '../../shared/validators/email-validator.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent {

  signupForm: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.pattern(v.namePattern)]],
    email: [null, [Validators.required, Validators.pattern(v.emailPattern)], [ this.ev ]],
    nickname: [null, [Validators.required, v.checkNickname]],
    password: [null, [Validators.required, Validators.minLength(6)]],
    password2: [null, [Validators.required]],
  },{
    validators: [v.confirmPassword('password', 'password2')]
  });

  constructor(
    private fb: FormBuilder,
    private ev: EmailValidatorService
  ) {

    this.signupForm.reset({
      name: 'Alejo Castaneda',
      email: 'test1@mail.com',
      nickname: 'CarajitoX',
      password: '123456',
      password2: '123456'
    });
  }

  get emailError() {
    return v.checkEmail(this.signupForm, 'email');
  }

  checkField(field: string) {
    return v.checkField(this.signupForm, field);
  }

  onSubmit() {
    const form = this.signupForm;

    if (form.invalid) {
      form.markAllAsTouched();
    }
  }

}
