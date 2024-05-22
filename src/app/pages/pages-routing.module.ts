import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// * Components -> Playgrounds
import { PlaygroundComponentsComponent } from './components/playground-components.component';
import { PlaygroundDirectivesComponent } from './directives/playground-directives.component';
import { PlaygroundRoutingComponent } from './routing/playground-routing.component';
import { PlaygroundServicesComponent } from './services/playground-services.component';
import { PlaygroundFormsComponent } from './forms/playground-forms.component';
import { PlaygroundHttpComponent } from './http/playground-http.component';
import { PlaygroundPipesComponent } from './pipes/playground-pipes.component';
import { PlaygroundAnimationsComponent } from './animations/playground-animations.component';
import { PlaygroundMapsComponent } from './maps/playground-maps.component';
import { PlaygroundTestingComponent } from './testing/playground-testing.component';

const routes: Routes = [
  {
    path: 'components',
    component: PlaygroundComponentsComponent,
    loadChildren: () => import('./components/components.module').then( m => m.ComponentsModule )
  },
  {
    path: 'directives',
    component: PlaygroundDirectivesComponent,
    loadChildren: () => import('./directives/directives.module').then( m => m.DirectivesModule )
  },
  {
    path: 'routing',
    component: PlaygroundRoutingComponent,
    loadChildren: () => import('./routing/routing.module').then( m => m.RoutingModule )
  },
  {
    path: 'services',
    component: PlaygroundServicesComponent,
    loadChildren: () => import('./services/services.module').then( m => m.ServicesModule )
  },
  {
    path: 'forms',
    component: PlaygroundFormsComponent,
    loadChildren: () => import('./forms/forms.module').then( m => m.MyFormsModule )
  },
  {
    path: 'http',
    component: PlaygroundHttpComponent
  },
  {
    path: 'pipes',
    component: PlaygroundPipesComponent
  },
  {
    path: 'animations',
    component: PlaygroundAnimationsComponent
  },
  {
    path: 'maps',
    component: PlaygroundMapsComponent
  },
  {
    path: 'testing',
    component: PlaygroundTestingComponent
  },
  {
    path: '',
    component: PlaygroundComponentsComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
