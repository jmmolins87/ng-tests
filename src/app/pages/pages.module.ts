import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    DirectivesModule,
    RoutingModule
  ]
})
export class PagesModule { }
