import { AbstractControl, FormGroup, ValidationErrors, FormControl } from '@angular/forms';

/* Patterns */

export const namePattern: string = '([a-zA-Z]+) ([a-zA-Z+]+)';
export const emailPattern: string = '^[a-z0-9.%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

/* Functions */

// Validators in form

export function checkNickname(control: FormControl): ValidationErrors | null {
  const value: string = control.value?.trim().toLowerCase();

  if (value == 'strider') {
    return { noStrider: true };
  }

  return null;
}

export function confirmPassword(field1: string, field2: string) {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const pass1 = formGroup.get(field1)?.value;
    const pass2 = formGroup.get(field2)?.value;

    if (pass1 !== pass2) {
      formGroup.get(field2)?.setErrors({ notEqual: true });
      return { notEqual: true };
    }

    formGroup.get(field2)?.setErrors(null);
    return null;
  }
}

// HTML error checkers

export function checkField(form: FormGroup, field: string): boolean | undefined {
  return form.get(field)?.invalid && form.get(field)?.touched;
}

export function checkEmail(form: FormGroup, field: string): string {
  const errors = form.get(field)?.errors;

  if (errors?.['required']) {
    return 'El email es obligatorio';
  }
  else if (errors?.['pattern']) {
    return 'El valor ingresado no es un email válido';
  }
  else if (errors?.['usedEmail']) {
    return 'El email ya se encuentra en uso';
  }

  return '';
}
