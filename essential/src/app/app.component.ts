import { Component, computed } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { UserComponent } from '../components/user/user.component';
import { HeaderComponent } from '../components/header/header.component';

import { DUMMY_USERS } from '../constant/data';
import { TasksComponent } from '../components/tasks/tasks.component';

@Component({
   selector: 'app-root',
   imports: [UserComponent, HeaderComponent, TasksComponent],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css',
})
export class AppComponent {
   users = DUMMY_USERS;
   selectedUserId = '';

   get selectedUser() {
      return this.users.find((user) => user.id === this.selectedUserId);
   }

   onSelectUser(id: string) {
      console.log(`User with id ${id} selected.`);
      this.selectedUserId = id;
   }
}
