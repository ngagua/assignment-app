import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/model';

@Pipe({
  name: 'countage',
})
export class CountagePipe implements PipeTransform {
  transform(birthDate: Date | undefined): number {
    const today = new Date();
    const userBirthDate = new Date(birthDate!);
    let age = today.getFullYear() - userBirthDate.getFullYear();
    const month = today.getMonth() - userBirthDate.getMonth();
    if (
      month < 0 ||
      (month === 0 && today.getDate() < userBirthDate.getDate())
    ) {
      age--;
    }

    return age;
  }
}
