import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NavtabsComponent } from './components/navtabs/navtabs.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    NavtabsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent,
    NavtabsComponent
  ]
})
export class SharedModule { }
