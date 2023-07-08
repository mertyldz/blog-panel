import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../components/list-user/user.component';
import { AddUserComponent } from '../components/add-user/add-user.component';
import { UpdateUserComponent } from '../components/update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UserComponent, AddUserComponent, UpdateUserComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
})
export class UserModule {}
