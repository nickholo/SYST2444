import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HologronCountryComponent } from './hologron-country.component';

describe('HologronCountryComponent', () => {
  let component: HologronCountryComponent;
  let fixture: ComponentFixture<HologronCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HologronCountryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HologronCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
