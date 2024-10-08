import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHologronComponent } from './footer-hologron.component';

describe('FooterHologronComponent', () => {
  let component: FooterHologronComponent;
  let fixture: ComponentFixture<FooterHologronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterHologronComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterHologronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
