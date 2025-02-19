import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../../models/category';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent {
  updateCategoryForm: FormGroup;
  selectedId: number;
  selectedCategory: Category;

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute, fb: FormBuilder) {
    this.selectedId = Number(activatedRoute.snapshot.paramMap.get('id'));
    this.selectedCategory = this.categoryService.getCategoryById(this.selectedId);

    this.updateCategoryForm = fb.group({
      categoryId: this.selectedCategory.categoryId,
      name: this.selectedCategory.name,
      creationDate: this.selectedCategory.creationDate,
    });
  }

  update(item:any) {
    let category:Category=item.value;
    this.categoryService.updateCategory(this.selectedId, category);
  }
}
