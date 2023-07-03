import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidePostComponent } from './aside-post.component';

describe('AsidePostComponent', () => {
  let component: AsidePostComponent;
  let fixture: ComponentFixture<AsidePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsidePostComponent]
    });
    fixture = TestBed.createComponent(AsidePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
