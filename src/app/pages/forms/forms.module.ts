import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsRoutingModule } from './forms-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { PlaygroundFormsComponent } from './playground-forms.component';
import { TemplateComponent } from './components/template/template.component';
import { ModelComponent } from './components/model/model.component';


@NgModule({
  declarations: [
    PlaygroundFormsComponent,
    TemplateComponent,
    ModelComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MyFormsModule { }
