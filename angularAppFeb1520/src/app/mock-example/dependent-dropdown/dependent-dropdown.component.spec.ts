import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentDropdownComponent } from './dependent-dropdown.component';

describe('DependentDropdownComponent', () => {
  let component: DependentDropdownComponent;
  let fixture: ComponentFixture<DependentDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependentDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependentDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
