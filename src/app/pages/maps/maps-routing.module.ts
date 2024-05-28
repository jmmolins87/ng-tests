import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NativeMapsComponent } from './components/native-maps/native-maps.component';
import { LibraryMapsComponent } from './components/library-maps/library-maps.component';

const routes: Routes = [
  {
    path: '',
    component: NativeMapsComponent,
    pathMatch: 'full'
  },
  {
    path: 'nativeMaps',
    component: NativeMapsComponent
  },
  {
    path: 'libraryMaps',
    component: LibraryMapsComponent
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
export class MapsRoutingModule { }
