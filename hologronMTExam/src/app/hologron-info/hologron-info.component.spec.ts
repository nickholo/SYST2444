import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HologronInfoComponent } from './hologron-info.component';

describe('HologronInfoComponent', () => {
  let component: HologronInfoComponent;
  let fixture: ComponentFixture<HologronInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HologronInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HologronInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
