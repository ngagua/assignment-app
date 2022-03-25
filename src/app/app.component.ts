import { Component } from '@angular/core';
import { User, Status } from './model/model';
import { AddBlockPipe } from './pipes/addBlock.pipe';
import { UsersNamePipe } from './pipes/users-name.pipe';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService, UsersNamePipe, AddBlockPipe],
})
export class AppComponent {
  users: Array<User | undefined> = [];
  loading = false;
  blockArray: Array<number> = [];

  constructor(private userService: UserService) {}

  async loadUsers() {
    this.loading = true;
    this.users = await this.userService.getUsers();
    this.loading = false;
    console.log(this.users);
  }
}
