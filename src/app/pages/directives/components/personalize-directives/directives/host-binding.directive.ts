import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {

  @HostBinding('class') isHover!: string;

  constructor() { }
  
  @HostListener('mouseover') onHover() {
    this.isHover = 'is-hover';
  }
  
  @HostListener('mouseout') onMouseOut() {
    this.isHover = 'is-not-hover';
  }
}
