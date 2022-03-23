import { Component } from '@angular/core';
import { User } from './model/model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService],
})
export class AppComponent {
  users: Array<User | undefined> = [];
  loading = false;

  constructor(private userService: UserService) {}

  async loadUsers() {
    this.loading = true;
    this.users = await this.userService.getUsers();
    this.loading = false;
    console.log(this.users);
  }
}
