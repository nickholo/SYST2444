import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directives02Component } from './directives02.component';

describe('Directives02Component', () => {
  let component: Directives02Component;
  let fixture: ComponentFixture<Directives02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Directives02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Directives02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
