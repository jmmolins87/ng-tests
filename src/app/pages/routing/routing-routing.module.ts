import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicRoutesComponent } from './components/basic-routes/basic-routes.component';
import { RootPathComponent } from './components/root-path/root-path.component';
import { RouterLinkComponent } from './components/router-link/router-link.component';
import { RouterNavigateComponent } from './components/router-navigate/router-navigate.component';
import { DynamicRouteComponent } from './components/dynamic-routes/dynamic-route.component';
import { ChildrenRouteComponent } from './components/children-route/children-route.component';
import { RouterGuardComponent } from './components/router-guard/router-guard.component';

import { randomGuard } from './components/router-guard/random.guard';


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
    path: 'dynamicRoute',
    component: DynamicRouteComponent,
    loadChildren: () => import('./components/dynamic-routes/dynamic-routes.module').then( m => m.DynamicRoutesModule )
  },
  {
    path: 'childRoutes',
    component: ChildrenRouteComponent,
    loadChildren: () => import('./components/children-route/children-route.module').then( m => m.ChildrenRouteModule )
  },
  {
    path: 'routerGuard',
    component: RouterGuardComponent,
    loadChildren: () => import('./components/router-guard/router-guard.module').then( m => m.RouterGuardModule ),
    canActivate: [randomGuard]
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
