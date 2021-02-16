import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeCustomerComponent } from './safe-customer.component';

describe('SafeCustomerComponent', () => {
  let component: SafeCustomerComponent;
  let fixture: ComponentFixture<SafeCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafeCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
