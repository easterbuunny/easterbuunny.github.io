import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomateSimulatorComponent } from './automate-simulator.component';

describe('AutomateSimulatorComponent', () => {
  let component: AutomateSimulatorComponent;
  let fixture: ComponentFixture<AutomateSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomateSimulatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomateSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
