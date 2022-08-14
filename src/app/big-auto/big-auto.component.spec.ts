import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigAutoComponent } from './big-auto.component';

describe('BigAutoComponent', () => {
  let component: BigAutoComponent;
  let fixture: ComponentFixture<BigAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BigAutoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BigAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
