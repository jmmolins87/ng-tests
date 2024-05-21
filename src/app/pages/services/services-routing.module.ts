import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleServiceComponent } from './components/people-service/people-service.component';
import { ListServiceComponent } from './components/list-service/list-service.component';
import { ServiceWithPromiseComponent } from './components/service-with-promise/service-with-promise.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleServiceComponent,
    pathMatch: 'full'
  },
  {
    path: 'people',
    component: PeopleServiceComponent
  },
  {
    path: 'listService',
    component: ListServiceComponent
  },
  {
    path: 'serviceWithPromise',
    component: ServiceWithPromiseComponent
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
export class ServicesRoutingModule { }
