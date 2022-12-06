import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class SharedModule {
}
