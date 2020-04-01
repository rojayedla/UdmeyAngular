import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempParentComponent } from './temp-parent.component';

describe('TempParentComponent', () => {
  let component: TempParentComponent;
  let fixture: ComponentFixture<TempParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
