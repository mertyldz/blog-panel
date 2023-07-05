import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from '../user';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  activeId = Number(this.activatedRoute.snapshot.paramMap.get("id"));
  selectedUser = this.userService.getUserList()[this.userService.getIndex(this.activeId)];

  updateUserForm:FormGroup;
  constructor(fb:FormBuilder, private userService:UserService, private activatedRoute: ActivatedRoute,private router:Router){ 
    this.updateUserForm=fb.group({
      userId: this.selectedUser.userId,
      username: this.selectedUser.username,
      email: this.selectedUser.email,
      creationDate: this.selectedUser.creationDate,
      isActive: this.selectedUser.isActive
    })
  }


  updateUser(){

    this.userService.updateUser(this.activeId , this.updateUserForm.value.username, this.updateUserForm.value.email);
    alert("Başarıyla güncellendi.")
    this.router.navigateByUrl('/user')
    
  }

 



  

}
