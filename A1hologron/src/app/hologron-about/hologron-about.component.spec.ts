import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HologronAboutComponent } from './hologron-about.component';

describe('HologronAboutComponent', () => {
  let component: HologronAboutComponent;
  let fixture: ComponentFixture<HologronAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HologronAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HologronAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
