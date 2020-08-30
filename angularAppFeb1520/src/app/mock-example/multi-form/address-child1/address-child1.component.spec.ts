import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressChild1Component } from './address-child1.component';

describe('AddressChild1Component', () => {
  let component: AddressChild1Component;
  let fixture: ComponentFixture<AddressChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
