import { Component } from '@angular/core';

import { User } from './interfaces/user';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Information';

  // action: string = '';

  displayEdit: boolean = false;

  profileForm: NgForm | undefined;

  toggleEdit(): void {
    this.displayEdit = !this.displayEdit;
    if(!this.displayEdit)
      this.title = "Update User Information"
    if(this.displayEdit)
      this.title = "User Information"
  }

  saveChanges(form: NgForm): void {
    console.log(this.profileForm?.value)
  }

  user: User = {
    name: "Sam Rashed",
    age: 42,
    favoriteColor: 'Red',
    interests: 'Chess',
    additionalInfo: 'Hobbies'
  }

}