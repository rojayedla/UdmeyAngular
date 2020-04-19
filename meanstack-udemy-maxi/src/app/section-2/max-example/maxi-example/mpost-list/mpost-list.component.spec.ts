import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpostListComponent } from './mpost-list.component';

describe('MpostListComponent', () => {
  let component: MpostListComponent;
  let fixture: ComponentFixture<MpostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
