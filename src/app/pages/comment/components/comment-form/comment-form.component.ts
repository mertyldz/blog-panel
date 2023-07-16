import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Confirmation } from '../../models/confirmation';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/pages/user/models/user';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  @Input() commentFormGroup: FormGroup;
  @Input() buttonName:string='';
  // emit form
  @Output() onSave = new EventEmitter<any>;


  confirmMenu: Confirmation[] = [
    { status: 'Onaylandı', value: true },
    { status: 'Onaylanmadı', value: false },
  ];
  userList: User[] = [];

  constructor(fb: FormBuilder, private userService: UserService) {
    this.commentFormGroup = fb.group({});
  }

  ngOnInit(): void {
    this.userService.getUserList().subscribe((x) => (this.userList = x));
  }

  save(item:any){
    this.onSave.emit(item);
  }
}
