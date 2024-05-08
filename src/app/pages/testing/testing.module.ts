import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { PlaygroundTestingComponent } from './playground-testing.component';


@NgModule({
  declarations: [
    PlaygroundTestingComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule
  ]
})
export class TestingModule { }
