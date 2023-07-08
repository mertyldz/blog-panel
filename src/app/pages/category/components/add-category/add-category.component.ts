import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  addCategoryForm:FormGroup;

  constructor(fb:FormBuilder, private categoryService:CategoryService){
    this.addCategoryForm=fb.group({
      categoryId:this.categoryService.getLastId()+1,
      name:'',
      creationDate:'',
    })
  }

  addCategory(item:any){
    this.categoryService.addCategory(item.value);
  }
}
