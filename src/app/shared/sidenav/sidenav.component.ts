import { Component } from '@angular/core';

interface MenuItem {
  text:   string;
  route: string
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [
    `li {
      cursor: pointer;
    }`
  ]
})
export class SidenavComponent {

  templateMenu: MenuItem[] = [
    { text: 'Básicos', route: 'template/basics' },
    { text: 'Dinámicos', route: 'template/dynamics' },
    { text: 'Switches', route: 'template/switches' },
  ];

  reactiveMenu: MenuItem[] = [
    { text: 'Básicos', route: 'reactive/basics' },
    { text: 'Dinámicos', route: 'reactive/dynamics' },
    { text: 'Switches', route: 'reactive/switches' },
  ];

}
