import { 
  Directive, 
  ElementRef, 
  HostListener, 
  Renderer2 
} from '@angular/core';

@Directive({
  selector: '[appHostListener]'
})
export class HostListenerDirective {

  constructor( private elem: ElementRef, private renderer: Renderer2 ) { 
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'lightgray');
  }

  @HostListener('mouseover') onHover() {
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'lightblue');
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'lightgray');
  }

}
