import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { ComponentsModule } from './components/components.module';
import { ConfigTabsModule } from './config-tabs/config-tabs.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    ConfigTabsModule
  ]
})
export class PagesModule { }
