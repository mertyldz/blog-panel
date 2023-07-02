import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private userService:UserService){}

  users:User[] = this.userService.getUserList();

  removeUser(id:number){this.userService.deleteUser(id)}
  
}
