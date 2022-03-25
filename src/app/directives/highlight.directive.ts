import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { User, Status } from '../model/model';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input('appHighlight') cardBackgroundColor: string | undefined;
  @Input() user: User | undefined;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor =
      this.cardBackgroundColor;
  }

  @HostListener('click')
  click() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}
