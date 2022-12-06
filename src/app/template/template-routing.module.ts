import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsComponent } from './basics/basics.component';
import { DynamicsComponent } from './dynamics/dynamics.component';
import { SwitchesComponent } from './switches/switches.component';

const module = 'Template -';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basics', title: `${module} Basics`, component: BasicsComponent },
      { path: 'dynamics', title: `${module} Dynamics`, component: DynamicsComponent },
      { path: 'switches', title: `${module} Switches`, component: SwitchesComponent },
      { path: '**', redirectTo: 'basics' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
