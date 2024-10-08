import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksHologronComponent } from './books-hologron.component';

describe('BooksHologronComponent', () => {
  let component: BooksHologronComponent;
  let fixture: ComponentFixture<BooksHologronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksHologronComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksHologronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
