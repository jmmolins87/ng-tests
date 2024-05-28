import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TestingRoutingModule } from './testing-routing.module';

import { PlaygroundTestingComponent } from './playground-testing.component';
import { FormToDoComponent } from './components/form-to-do/form-to-do.component';
import { ListToDoComponent } from './components/list-to-do/list-to-do.component';
import { CardToDoComponent } from './components/card-to-do/card-to-do.component';


@NgModule({
  declarations: [
    PlaygroundTestingComponent,
    FormToDoComponent,
    ListToDoComponent,
    CardToDoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TestingRoutingModule
  ],
  exports: [
    PlaygroundTestingComponent
  ]
})
export class TestingModule { }
