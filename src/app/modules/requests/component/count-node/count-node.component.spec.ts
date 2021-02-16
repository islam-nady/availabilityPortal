import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountNodeComponent } from './count-node.component';

describe('CountNodeComponent', () => {
  let component: CountNodeComponent;
  let fixture: ComponentFixture<CountNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
