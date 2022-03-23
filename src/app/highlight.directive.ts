import { Directive, ElementRef, Input } from '@angular/core';
import { User } from './model/model';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() user: User | undefined;
  constructor(private card: ElementRef) {
    if (this.user?.status == 'Active') {
      this.card.nativeElement.style.backgroundColor = 'green';
    } else if (this.user?.status == 'Deleted') {
      this.card.nativeElement.style.backgroundColor = 'red';
    } else {
      this.card.nativeElement.style.backgroundColor = 'blue';
    }
  }
}
