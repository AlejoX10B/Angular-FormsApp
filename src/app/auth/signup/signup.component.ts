import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


//TODO: Temp
const namePattern: string = '([a-zA-Z+]) ([a-zA-Z+])';
const emailPattern: string = '^[a-z0-9.%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent {

  signupForm: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.pattern(namePattern)]],
    email: [null, [Validators.required, Validators.pattern(emailPattern)]],
    nickname: [null, [Validators.required, this.checkNickname]],
  });

  constructor(private fb: FormBuilder) {
  }

  checkField(field: string) {
    const form = this.signupForm;
    return form.get(field)?.invalid && form.get(field)?.touched;
  }

  checkNickname(control: FormControl) {
    const value: string = control.value?.trim().toLowerCase();
    console.log(value);

    if (value == 'strider') {
      return { noStrider: true };
    }

    return null;
  }

  onSubmit() {
    const form = this.signupForm;

    if (form.invalid) {
      form.markAllAsTouched();
    }
  }

}
