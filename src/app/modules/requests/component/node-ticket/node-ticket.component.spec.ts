import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeTicketComponent } from './node-ticket.component';

describe('NodeTicketComponent', () => {
  let component: NodeTicketComponent;
  let fixture: ComponentFixture<NodeTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
