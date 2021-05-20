import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolatedNodesOfMonthComponent } from './violated-nodes-of-month.component';

describe('ViolatedNodesOfMonthComponent', () => {
  let component: ViolatedNodesOfMonthComponent;
  let fixture: ComponentFixture<ViolatedNodesOfMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolatedNodesOfMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolatedNodesOfMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
