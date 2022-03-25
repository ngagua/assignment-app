import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/model';

@Pipe({
  name: 'usersname',
})
export class UsersNamePipe implements PipeTransform {
  transform(users: (User | undefined)[]): string {
    return users.map((user) => user?.firstName).join(', ');
  }
}
