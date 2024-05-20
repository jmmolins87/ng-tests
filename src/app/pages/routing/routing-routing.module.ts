import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicRoutesComponent } from './components/basic-routes/basic-routes.component';
import { RootPathComponent } from './components/root-path/root-path.component';
import { RouterLinkComponent } from './components/router-link/router-link.component';
import { RouterNavigateComponent } from './components/router-navigate/router-navigate.component';


const routes: Routes = [
  {
    path: 'basicRoutes',
    component: BasicRoutesComponent,
    loadChildren: () => import('./components/basic-routes/basic-routes.module').then( m => m.BasicRoutesModule )
  },
  {
    path: 'rootPath',
    component: RootPathComponent,
    loadChildren: () => import('./components/root-path/root-path.module').then( m => m.RootPathModule )
  },
  {
    path: 'routerLink',
    component: RouterLinkComponent,
    loadChildren: () => import('./components/router-link/router-link.module').then( m => m.RouterLinkModule )
  },
  {
    path: 'routerNavigate',
    component: RouterNavigateComponent,
    loadChildren: () => import('./components/router-navigate/router-navigate.module').then( m => m.RouterNavigateModule )
  },
  {
    path: '',
    redirectTo: 'basicRoutes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
