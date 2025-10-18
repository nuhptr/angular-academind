import { Component } from '@angular/core';

import { DUMMY_USERS } from '../../data/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user-components',
  imports: [],
  templateUrl: './user.html',
})
export class UserComponent {
  selectedUsers = DUMMY_USERS[randomIndex];
}
