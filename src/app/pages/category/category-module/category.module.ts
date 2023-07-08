import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from '../components/add-category/add-category.component';
import { EditCategoryComponent } from '../components/edit-category/edit-category.component';
import { DetailCategoryComponent } from '../components/detail-category/detail-category.component';
import { CategoryComponent } from '../components/list-category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryFormComponent } from '../components/category-form/category-form.component';

@NgModule({
  declarations: [
    CategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    DetailCategoryComponent,
    CategoryFormComponent,

  ],
  imports: [CommonModule,FormsModule,ReactiveFormsModule,SharedModule],
  exports:[]
})
export class CategoryModule {}
