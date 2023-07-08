import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Status } from '../../models/status';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() userFormGroup:FormGroup;
  @Input() buttonName:string='';
  @Output() onSave = new EventEmitter<any>

  isActiveMenu:Status[] = [
    {durum:"Aktif", isActive:true},
    {durum:"Pasif", isActive:false}
  ]


  constructor(fb:FormBuilder){
    this.userFormGroup=fb.group({})
  }

  save(item:any){
    this.onSave.emit(item);
  }

}
