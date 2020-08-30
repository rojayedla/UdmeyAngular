import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationChild2Component } from './education-child2.component';

describe('EducationChild2Component', () => {
  let component: EducationChild2Component;
  let fixture: ComponentFixture<EducationChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
