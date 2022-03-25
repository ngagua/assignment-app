import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addBlock',
})
export class AddBlockPipe implements PipeTransform {
  transform(value: Array<number>, number: number): Array<number> {
    for (let i = 0; i < number; i++) {
      value.push(i);
    }
    return value;
  }
}
