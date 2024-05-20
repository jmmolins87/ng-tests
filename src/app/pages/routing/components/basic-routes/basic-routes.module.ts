import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutesRoutingModule } from './basic-routes-routing.module';
import { BasicRoutesComponent } from './basic-routes.component';
import { AboutComponent } from './components/about/about.component';
import { InfoComponent } from './components/info/info.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    BasicRoutesComponent,
    AboutComponent,
    InfoComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    BasicRoutesRoutingModule
  ]
})
export class BasicRoutesModule { }
