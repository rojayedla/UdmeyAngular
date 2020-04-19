import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpostCreateComponent } from './mpost-create.component';

describe('MpostCreateComponent', () => {
  let component: MpostCreateComponent;
  let fixture: ComponentFixture<MpostCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpostCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
