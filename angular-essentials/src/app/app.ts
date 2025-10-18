import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../components/header/header';
import { UserComponent } from '../components/user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [HeaderComponent, UserComponent],
})
export class App {
  // protected readonly title = signal('angular-essentials');
}
