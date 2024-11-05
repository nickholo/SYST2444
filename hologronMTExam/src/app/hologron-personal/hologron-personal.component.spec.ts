import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HologronPersonalComponent } from './hologron-personal.component';

describe('HologronPersonalComponent', () => {
  let component: HologronPersonalComponent;
  let fixture: ComponentFixture<HologronPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HologronPersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HologronPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
