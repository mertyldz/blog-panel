import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  addUserForm: FormGroup;
  user: User={
    userId:0, username:'', email:'', creationDate:'', isActive: false};

  isActiveMenu:Status[] = [
    {durum:"Aktif", isActive:true},
    {durum:"Pasif", isActive:false}
  ]

  constructor(private userService: UserService, fb: FormBuilder, private router:Router) {
    this.addUserForm = fb.group({
      userId: this.userService.getIdOfLastUser()+1, // make id unique
      username: '',
      email: '',
      creationDate: '',
      isActive: false,
    });
  }

  addUser(user: User) {
    this.userService.addUser(user);
  }

  save() {
    this.user = this.addUserForm.value;
    this.addUser(this.user);
    alert("Başarıyla eklendi!")
    this.router.navigateByUrl("/user")
  }
}

export interface Status{
  durum:string,
  isActive:boolean
}
