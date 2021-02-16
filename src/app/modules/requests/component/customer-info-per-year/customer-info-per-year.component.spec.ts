import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoPerYearComponent } from './customer-info-per-year.component';

describe('CustomerInfoPerYearComponent', () => {
  let component: CustomerInfoPerYearComponent;
  let fixture: ComponentFixture<CustomerInfoPerYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerInfoPerYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoPerYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
