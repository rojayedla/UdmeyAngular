import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post6CreateComponent } from './post6-create.component';

describe('Post6CreateComponent', () => {
  let component: Post6CreateComponent;
  let fixture: ComponentFixture<Post6CreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post6CreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post6CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
