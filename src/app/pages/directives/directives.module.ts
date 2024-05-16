import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DirectivesRoutingModule } from './directives-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { ToDoComplexTaskModule } from './tasks/to-do-complex-task/to-do-complex-task.module';
import { RegisterBoxTaskModule } from './tasks/register-box-task/register-box-task.module';

import { PlaygroundDirectivesComponent } from './playground-directives.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { PersonalizeDirectivesComponent } from './components/personalize-directives/personalize-directives.component';

import { UnderlineDirective } from './components/personalize-directives/directives/underline.directive';
import { RendererDirective } from './components/personalize-directives/directives/renderer.directive';
import { HostListenerDirective } from './components/personalize-directives/directives/host-listener.directive';
import { HostBindingDirective } from './components/personalize-directives/directives/host-binding.directive';
import { InputDirective } from './components/personalize-directives/directives/input.directive';


@NgModule({
  declarations: [
    PlaygroundDirectivesComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    PersonalizeDirectivesComponent,
    UnderlineDirective,
    RendererDirective,
    HostListenerDirective,
    HostBindingDirective,
    InputDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesRoutingModule,
    SharedModule,
    ToDoComplexTaskModule,
    RegisterBoxTaskModule
  ],
  exports: [
    PlaygroundDirectivesComponent
  ]
})
export class DirectivesModule { }
