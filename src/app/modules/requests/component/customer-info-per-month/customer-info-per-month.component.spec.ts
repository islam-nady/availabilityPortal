import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoPerMonthComponent } from './customer-info-per-month.component';

describe('CustomerInfoPerMonthComponent', () => {
  let component: CustomerInfoPerMonthComponent;
  let fixture: ComponentFixture<CustomerInfoPerMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerInfoPerMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoPerMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
