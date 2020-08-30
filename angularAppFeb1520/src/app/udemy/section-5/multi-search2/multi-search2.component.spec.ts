import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSearch2Component } from './multi-search2.component';

describe('MultiSearch2Component', () => {
  let component: MultiSearch2Component;
  let fixture: ComponentFixture<MultiSearch2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSearch2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSearch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
