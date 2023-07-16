import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/pages/category/models/category';
import { User } from 'src/app/pages/user/models/user';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';
import { PublishedStatus } from '../../models/published-status';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit{
  @Input() buttonName:string='';
  @Output() onSave = new EventEmitter<any>;
  // emit form to save
  @Input() postFormGroup:FormGroup;
  userList:User[]=[];
  categoryList:Category[]=[];


  isPublished: PublishedStatus[] = [
    { status: 'Yayında', isPublished: true },
    { status: 'Yayında Değil', isPublished: false },
  ];

  constructor(private userService:UserService, private categoryService:CategoryService, fb:FormBuilder){
    this.postFormGroup=fb.group({
      postId: 0,
      userId: 0,
      categoryId: 0,
      title: '',
      content: '',
      viewCount: 0,
      creationDate: '',
      isPublished: false,
    })
  }

  ngOnInit(): void {
      this.userService.getUserList().subscribe(x=>this.userList=x);
      this.categoryService.getCategories().subscribe(x=>this.categoryList=x)
  }

  save(item:any){
    this.onSave.emit(item);
  }

}
