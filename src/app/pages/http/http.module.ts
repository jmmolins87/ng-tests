import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpRoutingModule } from './http-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';

import { PlaygroundHttpComponent } from './playground-http.component';
import { GetRequestComponent } from './components/get-request/get-request.component';
import { GetRequestByIdComponent } from './components/get-request-by-id/get-request-by-id.component';
import { PostRequestComponent } from './components/post-request/post-request.component';
import { PostRequestFromFormComponent } from './components/post-request-from-form/post-request-from-form.component';
import { PutAndDeleteRequestComponent } from './components/put-and-delete-request/put-and-delete-request.component';
import { EuropeanCountriesTaskComponent } from './tasks/european-countries-task/european-countries-task.component';
import { RickAndMortyTaskComponent } from './tasks/rick-and-morty-task/rick-and-morty-task.component';


@NgModule({
  declarations: [
    PlaygroundHttpComponent,
    GetRequestComponent,
    GetRequestByIdComponent,
    PostRequestComponent,
    PostRequestFromFormComponent,
    PutAndDeleteRequestComponent,
    EuropeanCountriesTaskComponent,
    RickAndMortyTaskComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpRoutingModule,
    SharedModule
  ],
  exports: [
    PlaygroundHttpComponent
  ]
})
export class HttpModule { }
