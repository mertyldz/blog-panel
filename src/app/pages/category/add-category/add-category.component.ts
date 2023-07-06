import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  addCategoryForm:FormGroup;
  newCategory:Category;

  constructor(fb:FormBuilder, private categoryService:CategoryService){
    this.addCategoryForm=fb.group({
      categoryId:this.categoryService.getCategories().subscribe(x=>x.length+1),
      name:'',
      creationDate:'',
    })
    this.newCategory=this.addCategoryForm.value;
  }


  addCategory(){
    this.newCategory=this.addCategoryForm.value;
    this.categoryService.addCategory(this.newCategory);
  }

}
