import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;

  incrementCounter():void {
    this.counter +=1;
  }

  decrementCounter():void {
    this.counter -=1;
  }

names:string[] = ['George', 'Kyla', 'Julie'];

newName:string ='';

  addName():void {
    this.names.push(this.newName);
  }


  title = 'TemplateDrivenForm';
  user:User = {
    firstName: '',
    lastName: '',
    acceptedTerms: false,
    email:''
  }


  @ViewChild('userForm') userForm: NgForm | undefined;

  changeName(){
    this.names.push(this.newName);
  }

  submitForm() : void {
    if(this.userForm !== undefined){
      console.log(this.userForm.value);
    }
  }

}