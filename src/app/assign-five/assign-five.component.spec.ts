import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignFiveComponent } from './assign-five.component';

describe('AssignFiveComponent', () => {
  let component: AssignFiveComponent;
  let fixture: ComponentFixture<AssignFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
