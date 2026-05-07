import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSimulatorComponent } from './api-simulator.component';

describe('ApiSimulatorComponent', () => {
  let component: ApiSimulatorComponent;
  let fixture: ComponentFixture<ApiSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiSimulatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
