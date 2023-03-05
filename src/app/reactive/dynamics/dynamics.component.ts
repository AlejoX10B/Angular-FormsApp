import { Component } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  dynamicsForm: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array([
      ['Metal Gear'],
      ['Death Stranding']
    ], Validators.required)
  });

  newFav: FormControl = this.fb.control(null, Validators.required);

  get favorites() {
    return this.dynamicsForm.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  addFav() {
    if (this.newFav.invalid) { return; }

    this.favorites.push(this.fb.control(this.newFav.value, Validators.required));
    this.newFav.reset();
  }

  deleteFav(index: number) {
    this.favorites.removeAt(index);
  }

  onSubmit() {
    if (this.dynamicsForm.invalid) {
      this.dynamicsForm.markAllAsTouched();
      return;
    }

    console.log(this.dynamicsForm.value);
    this.dynamicsForm.reset();
  }

  checkField(field: string) {
    return this.dynamicsForm.controls[field].errors && this.dynamicsForm.controls[field].touched;
  }

}
