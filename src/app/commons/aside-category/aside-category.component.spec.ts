import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideCategoryComponent } from './aside-category.component';

describe('AsideCategoryComponent', () => {
  let component: AsideCategoryComponent;
  let fixture: ComponentFixture<AsideCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideCategoryComponent]
    });
    fixture = TestBed.createComponent(AsideCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
