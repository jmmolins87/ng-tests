import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CurrencyPipeComponent } from './components/currency-pipe/currency-pipe.component';
import { DecimalPipeComponent } from './components/decimal-pipe/decimal-pipe.component';
import { DatePipeComponent } from './components/date-pipe/date-pipe.component';
import { PercentPipeComponent } from './components/percent-pipe/percent-pipe.component';
import { JsonPipeComponent } from './components/json-pipe/json-pipe.component';
import { TransformTextPipesComponent } from './components/transform-text-pipes/transform-text-pipes.component';
import { SlicePipeComponent } from './components/slice-pipe/slice-pipe.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';

const routes: Routes = [
  {
    path: '',
    component: CurrencyPipeComponent,
    pathMatch: 'full'
  },
  {
    path: 'currencyPipe',
    component: CurrencyPipeComponent
  },
  {
    path: 'decimalPipe',
    component: DecimalPipeComponent
  },
  {
    path: 'datePipe',
    component: DatePipeComponent
  },
  {
    path: 'percentPipe',
    component: PercentPipeComponent
  },
  {
    path: 'jsonPipe',
    component: JsonPipeComponent
  },
  {
    path: 'transformTextsPipes',
    component: TransformTextPipesComponent
  },
  {
    path: 'slicePipe',
    component: SlicePipeComponent
  },
  {
    path: 'asyncPipe',
    component: AsyncPipeComponent
  },
  {
    path: 'customPipes',
    component: CustomPipesComponent
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
export class PipesRoutingModule { }
