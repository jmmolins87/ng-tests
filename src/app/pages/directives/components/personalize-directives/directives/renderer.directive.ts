import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderer]'
})
export class RendererDirective {

  constructor( elem: ElementRef, renderer: Renderer2 ) {
    renderer.setStyle( elem.nativeElement, 'text-decoration', 'underline' );
    renderer.setStyle( elem.nativeElement, 'color', 'red' );
  }

}
