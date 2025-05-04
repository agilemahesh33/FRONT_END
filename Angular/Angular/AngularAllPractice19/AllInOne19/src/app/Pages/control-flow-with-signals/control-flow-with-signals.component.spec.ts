import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowWithSignalsComponent } from './control-flow-with-signals.component';

describe('ControlFlowWithSignalsComponent', () => {
  let component: ControlFlowWithSignalsComponent;
  let fixture: ComponentFixture<ControlFlowWithSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowWithSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowWithSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
