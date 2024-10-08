import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonSelectComponent } from './json-select.component';

describe('JsonSelectComponent', () => {
  let component: JsonSelectComponent;
  let fixture: ComponentFixture<JsonSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsonSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
