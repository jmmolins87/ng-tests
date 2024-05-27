import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetRequestComponent } from './components/get-request/get-request.component';
import { GetRequestByIdComponent } from './components/get-request-by-id/get-request-by-id.component';
import { PostRequestComponent } from './components/post-request/post-request.component';
import { PostRequestFromFormComponent } from './components/post-request-from-form/post-request-from-form.component';
import { PutAndDeleteRequestComponent } from './components/put-and-delete-request/put-and-delete-request.component';
import { EuropeanCountriesTaskComponent } from './tasks/european-countries-task/european-countries-task.component';
import { RickAndMortyTaskComponent } from './tasks/rick-and-morty-task/rick-and-morty-task.component';

const routes: Routes = [
  {
    path: '',
    component: GetRequestComponent,
    pathMatch: 'full'
  },
  {
    path: 'getRequest',
    component: GetRequestComponent
  },
  {
    path: 'getRequestById',
    component: GetRequestByIdComponent
  
  },
  {
    path: 'postRequest',
    component: PostRequestComponent
  },
  {
    path: 'postRequestFromForm',
    component: PostRequestFromFormComponent
  },
  {
    path: 'putDeleteRequest',
    component: PutAndDeleteRequestComponent
  },
  {
    path: 'EuropeanCountriesTask',
    component: EuropeanCountriesTaskComponent
  },
  {
    path: 'rickAndMortyTask',
    component: RickAndMortyTaskComponent
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
export class HttpRoutingModule { }
