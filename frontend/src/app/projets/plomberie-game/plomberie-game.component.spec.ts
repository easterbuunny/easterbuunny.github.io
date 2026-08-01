import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlomberieGameComponent } from './plomberie-game.component';

describe('PlomberieGameComponent', () => {
  let component: PlomberieGameComponent;
  let fixture: ComponentFixture<PlomberieGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlomberieGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlomberieGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
