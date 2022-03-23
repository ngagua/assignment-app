import { User } from './model/model';
import { default as data } from '../data.json';

export class UserService {
  getUsers(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(data);
      }, 2000);
    });
  }
}
