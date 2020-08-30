import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiForm2Component } from './multi-form2.component';

describe('MultiForm2Component', () => {
  let component: MultiForm2Component;
  let fixture: ComponentFixture<MultiForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
