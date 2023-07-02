import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from '../user/user';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  updateUserForm:FormGroup;
  constructor(fb:FormBuilder, private userService:UserService, private activatedRoute: ActivatedRoute,private router:Router){ 
    this.updateUserForm=fb.group({
      username: '',
      email: ''
    })
  }


  updateUser(){
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    let activeId:number = Number(id);
    this.userService.updateUser(activeId , this.updateUserForm.value.username, this.updateUserForm.value.email);
    alert("Başarıyla güncellendi.")
    this.router.navigateByUrl('/user')
    
  }

 



  

}
