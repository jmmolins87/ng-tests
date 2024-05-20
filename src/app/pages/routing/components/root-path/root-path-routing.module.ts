import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootPathComponent } from './root-path.component';

const routes: Routes = [
  {
    path: '',
    component: RootPathComponent,
    pathMatch: 'full'
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
export class RootPathRoutingModule { }
