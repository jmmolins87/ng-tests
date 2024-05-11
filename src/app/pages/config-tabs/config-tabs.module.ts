import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigTabsRoutingModule } from './config-tabs-routing.module';
import { NavTabsComponent } from './nav-tabs.component';


@NgModule({
  declarations: [
    NavTabsComponent
  ],
  imports: [
    CommonModule,
    ConfigTabsRoutingModule
  ],
  exports: [
    NavTabsComponent
  ]
})
export class ConfigTabsModule { }
