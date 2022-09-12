import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTwoComponent } from './assign-two.component';

describe('AssignTwoComponent', () => {
  let component: AssignTwoComponent;
  let fixture: ComponentFixture<AssignTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
