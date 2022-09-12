import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignThreeComponent } from './assign-three.component';

describe('AssignThreeComponent', () => {
  let component: AssignThreeComponent;
  let fixture: ComponentFixture<AssignThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
