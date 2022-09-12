import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignFourComponent } from './assign-four.component';

describe('AssignFourComponent', () => {
  let component: AssignFourComponent;
  let fixture: ComponentFixture<AssignFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
