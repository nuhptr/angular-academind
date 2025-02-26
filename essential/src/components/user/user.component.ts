import {
   Component,
   computed,
   EventEmitter,
   input,
   Input,
   Output,
   signal,
} from '@angular/core';

type userProps = { id: string; avatar: string; name: string };

@Component({
   selector: 'app-user',
   imports: [],
   templateUrl: './user.component.html',
   styleUrl: './user.component.css',
})
export class UserComponent {
   @Input({ required: true }) user?: userProps;
   @Output() select = new EventEmitter<string>();

   // usign input signal
   // avatar = input.required<string>();
   // name = input.required<string>();

   imagePath = computed(() => {
      return `assets/${this.user?.avatar}`;
   });

   onSelectUser() {
      this.select.emit(this.user?.id);
   }
}
