import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimationsComponent } from './components/animations/animations.component';

const routes: Routes = [
  {
    path: '',
    component: AnimationsComponent,
    pathMatch: 'full'
  },
  {
    path: 'animations',
    component: AnimationsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule { }
