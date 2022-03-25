import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorOnHover]',
})
export class ColorOnHoverDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter')
  mouseenter() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
