import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, FormControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[customMin][ngModel]',
  providers: [{
    multi: true,
    provide: NG_VALIDATORS,
    useExisting: CustomMinDirective,
  }]
})
export class CustomMinDirective implements Validator{

  @Input() min!: number;

  validate(control: FormControl): ValidationErrors | null {
    const inputVal = control.value;
    return (inputVal <= this.min) ? {customMin: true} : null;
  }

}
