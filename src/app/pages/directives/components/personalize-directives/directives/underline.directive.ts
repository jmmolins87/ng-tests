import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  constructor( elem: ElementRef ) { 
    elem.nativeElement.style.textDecoration = 'underline';
  }

}
