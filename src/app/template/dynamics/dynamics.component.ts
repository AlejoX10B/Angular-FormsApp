import { Component } from '@angular/core';

interface Person {
  name: string;
  favorites: Fav[];
}

interface Fav {
  id: number;
  name: string
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  fav: string = '';

  person: Person = {
    name: 'Fernando',
    favorites: [
      { id: 1, name: 'Halo MCC' },
      { id: 2, name: 'Zelda' },
    ]
  }

  add() {
    if (!this.fav) return;

    this.person.favorites.push({
      id: this.person.favorites.length + 1,
      name: this.fav
    });
    this.fav = '';
  }

  delete(index: number) {
    this.person.favorites.splice(index, 1);
  }

  save() {
    console.log('Formulario posteado');
  }

}
