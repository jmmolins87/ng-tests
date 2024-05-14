import { 
  AfterViewInit, 
  Component, 
  Input, 
  OnChanges, 
  OnInit, 
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-life-cicle',
  templateUrl: './life-cicle.component.html',
  styleUrls: ['./life-cicle.component.css']
})
export class LifeCicleComponent implements OnInit, AfterViewInit, OnChanges {

  @Input()
  public textInput!: string;

  constructor() {
    console.warn('*** constructor ***');
    console.log('Lo uso para inicializar propiedades');
    console.log(`Texto recibido en el constructor: ${ this.textInput }`);
  }
  
  ngOnChanges( changes: SimpleChanges): void {
    console.warn('*** ngOnChanges ***');
    console.log(`Texto recibido en el ngOnChanges: ${ this.textInput }`);
    console.log(`Texto: ${ changes }`);
    console.log(`Valor anterior del texto ${ changes['textInput'].previousValue }`);
    console.log(`Valor actual del texto ${ changes['textInput'].currentValue }`);
  }
  
  ngOnInit(): void {
    console.warn('*** ngOnInit ***');
    console.log('Lo uso para lanzar acciones que arrancan el componente');
    console.log(`Texto recibido en el ngOnInit: ${ this.textInput }`);
  }

  ngAfterViewInit(): void {
    console.warn('*** ngAfterViewInit ***');
    console.log('Lo uso para lanzar acciones iniciales dentro de la plantilla del componente');
  }

}
