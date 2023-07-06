import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  titleList:string[] = ['userId', 'username', 'email', 'creationDate']



  pageNumber:number=1;
  users:User[]=[]
  constructor(private userService:UserService, private router:Router){}
  
  ngOnInit(): void {
    this.userService.getUserList().subscribe(x=>this.users=x);
}

  editUser(item:any){
    this.userService.deleteUser(item.userId);
  }

  deleteUser(item:any){
    this.router.navigate(['/user/' + item.userId]);
  }

  removeUser(id:number){this.userService.deleteUser(id)}
  updateUser(id:number){console.log(`${id} + " güncellendi!`)}
   
}
