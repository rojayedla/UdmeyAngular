import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExampleComponent } from './my-example.component';

describe('MyExampleComponent', () => {
  let component: MyExampleComponent;
  let fixture: ComponentFixture<MyExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
