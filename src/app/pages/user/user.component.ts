import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  pageNumber:number=1;
  users:User[]=[]
  constructor(private userService:UserService){}
  
  ngOnInit(): void {
    this.userService.getUserList().subscribe(x=>this.users=x);
}

  removeUser(id:number){this.userService.deleteUser(id)}
  updateUser(id:number){console.log(`${id} + " güncellendi!`)}
  
}
