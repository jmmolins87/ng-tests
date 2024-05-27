import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PipesRoutingModule } from './pipes-routing.module';
import { PlaygroundPipesComponent } from './playground-pipes.component';
import { SharedModule } from './../../shared/shared.module';
import { CurrencyPipeComponent } from './components/currency-pipe/currency-pipe.component';
import { DecimalPipeComponent } from './components/decimal-pipe/decimal-pipe.component';
import { DatePipeComponent } from './components/date-pipe/date-pipe.component';
import { PercentPipeComponent } from './components/percent-pipe/percent-pipe.component';
import { JsonPipeComponent } from './components/json-pipe/json-pipe.component';
import { TransformTextPipesComponent } from './components/transform-text-pipes/transform-text-pipes.component';
import { SlicePipeComponent } from './components/slice-pipe/slice-pipe.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';

import { ReverStringPipe } from './pipes/rever-string.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { NumToArrayPipe } from './pipes/num-to-array.pipe';

registerLocaleData(localeEs)

@NgModule({
  declarations: [
    PlaygroundPipesComponent,
    CurrencyPipeComponent,
    DecimalPipeComponent,
    DatePipeComponent,
    PercentPipeComponent,
    JsonPipeComponent,
    TransformTextPipesComponent,
    SlicePipeComponent,
    AsyncPipeComponent,
    CustomPipesComponent,
    ReverStringPipe,
    CapitalizePipe,
    NumToArrayPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PipesRoutingModule,
    SharedModule
  ],
  exports: [
    PlaygroundPipesComponent
  ],
  providers: [{
    provide:  LOCALE_ID, 
    useValue: 'es-ES'
  }]
})
export class PipesModule { }
