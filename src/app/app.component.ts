import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent,TasksComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {


  users = DUMMY_USERS;
  selectedUserId?:string;
  get Selecteduser(){
    return this.users.find((user)=> user.id === this.selectedUserId)!
  }
  name:any
  onSelectUser(id:string){
    this.selectedUserId =id
    this.users.find((user)=> {
      if(user.id === id){
        console.log(user.name);
     
        this.name = user.name
      }})

  }

}