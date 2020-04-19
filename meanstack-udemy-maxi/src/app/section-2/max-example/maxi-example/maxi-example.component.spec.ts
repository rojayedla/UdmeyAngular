import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxiExampleComponent } from './maxi-example.component';

describe('MaxiExampleComponent', () => {
  let component: MaxiExampleComponent;
  let fixture: ComponentFixture<MaxiExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxiExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxiExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
