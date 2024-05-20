import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootPathRoutingModule } from './root-path-routing.module';
import { RootPathComponent } from './root-path.component';


@NgModule({
  declarations: [
    RootPathComponent
  ],
  imports: [
    CommonModule,
    RootPathRoutingModule
  ]
})
export class RootPathModule { }
