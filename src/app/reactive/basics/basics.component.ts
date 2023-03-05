import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  /*basicsForm: FormGroup = new FormGroup({
    name: new FormControl('RTX 4080Ti'),
    price: new FormControl(1500),
    stock: new FormControl(5)
  });*/

  basicsForm: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    price: [null, [Validators.required, Validators.min(0)]],
    stock: [null, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.basicsForm.patchValue({
      name: 'RTX',
      price: 1500
    });
  }

  onSubmit() {
    if (this.basicsForm.invalid) {
      this.basicsForm.markAllAsTouched();
      return;
    }

    console.log(this.basicsForm.value);

    this.basicsForm.reset();
  }

  checkField(field: string) {
    return this.basicsForm.controls[field].errors && this.basicsForm.controls[field].touched;
  }

}
