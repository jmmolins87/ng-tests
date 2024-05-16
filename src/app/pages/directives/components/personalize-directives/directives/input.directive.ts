import { 
  Directive, 
  ElementRef, 
  HostListener, 
  Input, 
  Renderer2 
} from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective {

  @Input() configColor: any;
  @Input('fontSize') configFont: any;

  constructor( private elem: ElementRef, private renderer: Renderer2 ) { 
    this.configColor = {
      colorHover: 'green',
      colorNoHover: 'red'
    }

    this.configFont = {
      fontSizeBig: '20px',
      fontSizeSmall: '16px'
    }
  }

  @HostListener('mouseover') onHover() {
    this.renderer.setStyle( this.elem.nativeElement, 'color', this.configColor.colorHover );
    this.renderer.setStyle( this.elem.nativeElement, 'font-size', this.configFont.fontSizeBig );
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle( this.elem.nativeElement, 'color', this.configColor.colorNoHover );
    this.renderer.setStyle( this.elem.nativeElement, 'font-size', this.configFont.fontSizeSmall );
  }

}
