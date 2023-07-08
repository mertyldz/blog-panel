import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  @Input() buttonName:string='Kaydet';
  @Output() onSave = new EventEmitter<any>;
  formGroupName:FormGroup;
  constructor(fb:FormBuilder){
    this.formGroupName=fb.group({
      categoryId:0,
      name:'',
      creationDate:''
    })
  }

  save(item:any){
    this.onSave.emit(item);
  }

}
