import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post6ListComponent } from './post6-list.component';

describe('Post6ListComponent', () => {
  let component: Post6ListComponent;
  let fixture: ComponentFixture<Post6ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post6ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post6ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
