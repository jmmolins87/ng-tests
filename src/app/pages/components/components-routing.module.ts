import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GreetingComponent } from './components/greeting/greeting.component';

const routes: Routes = [
  {
    path: 'greeting',
    component: GreetingComponent
  },
  {
    path: '',
    redirectTo: 'greeting',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
