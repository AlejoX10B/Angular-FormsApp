import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  @ViewChild('basicsForm') basicsForm!: NgForm;

  save() {
    console.log(this.basicsForm.value);
    this.basicsForm.resetForm({
      price: 0,
      stock: 0
    });
  }

  checkName(): boolean {
    return (
      this.basicsForm?.controls['product']?.invalid &&
      this.basicsForm?.controls['product']?.touched
    );
  }

  checkPrice(): boolean {
    return (
      this.basicsForm?.controls['price']?.value <= 0 &&
      this.basicsForm?.controls['price']?.touched
    );
  }

}
