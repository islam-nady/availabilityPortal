import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeAvailabilityReportForMonthComponent } from './node-availability-report-for-month.component';

describe('NodeAvailabilityReportForMonthComponent', () => {
  let component: NodeAvailabilityReportForMonthComponent;
  let fixture: ComponentFixture<NodeAvailabilityReportForMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeAvailabilityReportForMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeAvailabilityReportForMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
