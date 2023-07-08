import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Status } from '../../models/status';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  addUserForm: FormGroup;

  constructor(private userService: UserService,fb: FormBuilder,private router: Router) {
    this.addUserForm = fb.group({
      userId: this.userService.getIdOfLastUser() + 1, // make id unique
      username: '',
      email: '',
      creationDate: '',
      isActive: false,
    });
  }

  addUser(item: any) {
    let user: User = item.value;
    this.userService.addUser(user);
  }
}
