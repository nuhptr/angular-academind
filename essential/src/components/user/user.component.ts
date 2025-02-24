import { Component, computed, input, Input, signal } from '@angular/core';

import { DUMMY_USERS } from '../../constant/data';

@Component({
   selector: 'app-user',
   imports: [],
   templateUrl: './user.component.html',
   styleUrl: './user.component.css',
})
export class UserComponent {
   // @Input({ required: true }) avatar!: string; // required
   // @Input() name!: string; // required

   avatar = input.required<string>();
   name = input.required<string>();

   imagePath = computed(() => {
      return `assets/${this.avatar()}`;
   });

   // get imagePath() {
   // return 'assets/' + this.selectedUser().avatar;
   // }

   onSelectUser() {}
}
