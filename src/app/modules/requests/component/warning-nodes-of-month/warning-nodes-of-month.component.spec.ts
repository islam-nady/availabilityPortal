import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningNodesOfMonthComponent } from './warning-nodes-of-month.component';

describe('WarningNodesOfMonthComponent', () => {
  let component: WarningNodesOfMonthComponent;
  let fixture: ComponentFixture<WarningNodesOfMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningNodesOfMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningNodesOfMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
