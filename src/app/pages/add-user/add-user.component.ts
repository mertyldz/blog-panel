import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../user/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  addUserForm: FormGroup;
  user: User={
    userId:0, username:'', email:'', creationDate:'', isActive: false};

  constructor(private userService: UserService, fb: FormBuilder) {
    this.addUserForm = fb.group({
      userId: '', // make id unique
      username: '',
      email: '',
      creationDate: '',
      isActive: true,
    });
  }

  addUser(user: User) {
    this.userService.addUser(user);
  }

  save() {
    this.user = this.addUserForm.value;
    this.addUser(this.user);
    alert("Başarıyla eklendi!")
  }
}
