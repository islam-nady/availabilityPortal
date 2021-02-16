import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaiolataComponent } from './vaiolata.component';

describe('VaiolataComponent', () => {
  let component: VaiolataComponent;
  let fixture: ComponentFixture<VaiolataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaiolataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaiolataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
