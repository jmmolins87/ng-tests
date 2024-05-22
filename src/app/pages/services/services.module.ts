import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { TaskWritersModule } from './tasks/task-writers/task-writers.module';

import { PlaygroundServicesComponent } from './playground-services.component';
import { PeopleServiceComponent } from './components/people-service/people-service.component';
import { ListServiceComponent } from './components/list-service/list-service.component';
import { ServiceWithPromiseComponent } from './components/service-with-promise/service-with-promise.component';


@NgModule({
  declarations: [
    PlaygroundServicesComponent,
    PeopleServiceComponent,
    ListServiceComponent,
    ServiceWithPromiseComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    TaskWritersModule
  ],
  exports: [
    PlaygroundServicesComponent
  ]
})
export class ServicesModule { }
