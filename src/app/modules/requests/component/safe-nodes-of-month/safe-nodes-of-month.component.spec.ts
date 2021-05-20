import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeNodesOfMonthComponent } from './safe-nodes-of-month.component';

describe('SafeNodesOfMonthComponent', () => {
  let component: SafeNodesOfMonthComponent;
  let fixture: ComponentFixture<SafeNodesOfMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafeNodesOfMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeNodesOfMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
