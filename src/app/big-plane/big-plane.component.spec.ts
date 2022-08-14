import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigPlaneComponent } from './big-plane.component';

describe('BigAirComponent', () => {
  let component: BigPlaneComponent;
  let fixture: ComponentFixture<BigPlaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BigPlaneComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BigPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
