import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GreetingComponent } from './components/greeting/greeting.component';
import { FatherComponent } from './components/father/father.component';
import { SonOneComponent } from './components/son-one/son-one.component';
import { SonTwoComponent } from './components/son-two/son-two.component';

const routes: Routes = [
  {
    path:  'greeting',
    component: GreetingComponent
  },
  {
    path: 'father',
    component: FatherComponent
  },
  {
    path: 'sonOne',
    component: SonOneComponent
  },
  {
    path: 'sonTwo',
    component: SonTwoComponent
  },
  {
    path: '',
    redirectTo: 'greeting',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
