import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterExComponent } from './filter-ex.component';

describe('FilterExComponent', () => {
  let component: FilterExComponent;
  let fixture: ComponentFixture<FilterExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
