import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Status } from '../../models/status';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  activeId = Number(this.activatedRoute.snapshot.paramMap.get("id"));
  userList:User[]=[];
  isActiveMenu:Status[] = [
    {durum:"Aktif", isActive:true},
    {durum:"Pasif", isActive:false}
  ]

  updateUserForm:FormGroup;

  constructor(fb:FormBuilder, private userService:UserService, private activatedRoute: ActivatedRoute,private router:Router){ 
    this.userService.getUserList().subscribe(x=>this.userList=x);
    let selectedUser:User = this.userList[this.userService.getIndex(this.activeId)];



    this.updateUserForm=fb.group({
      userId: selectedUser.userId,
      username: selectedUser.username,
      email: selectedUser.email,
      creationDate: selectedUser.creationDate,
      isActive: selectedUser.isActive
    })
  }

  updateUser(item:any){
    let user:User=item.value;
    this.userService.updateUser(this.activeId,user);
  }
}
