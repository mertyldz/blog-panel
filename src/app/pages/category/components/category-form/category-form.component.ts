import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  @Input() buttonName:string='Kaydet';
  @Output() onSave = new EventEmitter<any>;
  // emit form
  @Input() categoryFormGroup:FormGroup;
  
  constructor(fb:FormBuilder){
    this.categoryFormGroup=fb.group({})
  }

  save(item:any){
    this.onSave.emit(item);
  }

}
