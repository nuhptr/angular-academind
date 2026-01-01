import { Component, computed, Input, signal } from '@angular/core';

import { DUMMY_USERS } from '../../data/dummy-users';

// Math.random() generates a floating-point number between 0 (inclusive) and 1 (exclusive).
// By multiplying this number by DUMMY_USERS.length, we scale it to a range from 0 up to (but not including) the length of the array.
// This ensures that when we take the floor of this value using Math.floor(), we get a valid index for the array,
// which ranges from 0 to DUMMY_USERS.length.
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // generates 0 to 5 for an array of length 6

@Component({
  selector: 'app-user-components',
  imports: [],
  templateUrl: './user.html',
})
export class UserComponent {
  // selectedUsers = DUMMY_USERS[randomIndex];
  // selectedUsers = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selsectedUsers().avatar);

  // TODO get combining string with dynamic data
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUsers().avatar;
  // }
  @Input() avatar!: string;

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUsers.set(DUMMY_USERS[randomIndex]);
  }
}
