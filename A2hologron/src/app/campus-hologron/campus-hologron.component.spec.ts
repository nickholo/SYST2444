import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusHologronComponent } from './campus-hologron.component';

describe('CampusHologronComponent', () => {
  let component: CampusHologronComponent;
  let fixture: ComponentFixture<CampusHologronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampusHologronComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusHologronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
