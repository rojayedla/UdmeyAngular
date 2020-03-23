import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileprepComponent } from './fileprep.component';

describe('FileprepComponent', () => {
  let component: FileprepComponent;
  let fixture: ComponentFixture<FileprepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileprepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileprepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
