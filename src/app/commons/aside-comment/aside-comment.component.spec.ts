import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideCommentComponent } from './aside-comment.component';

describe('AsideCommentComponent', () => {
  let component: AsideCommentComponent;
  let fixture: ComponentFixture<AsideCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideCommentComponent]
    });
    fixture = TestBed.createComponent(AsideCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
