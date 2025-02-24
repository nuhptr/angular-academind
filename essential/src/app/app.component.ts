import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { UserComponent } from '../components/user/user.component';
import { HeaderComponent } from '../components/header/header.component';

import { DUMMY_USERS } from '../constant/data';

@Component({
   selector: 'app-root',
   imports: [UserComponent, HeaderComponent],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css',
})
export class AppComponent {
   users = DUMMY_USERS;
}
