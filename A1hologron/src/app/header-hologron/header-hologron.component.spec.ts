import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHologronComponent } from './header-hologron.component';

describe('HeaderHologronComponent', () => {
	let component: HeaderHologronComponent;
	let fixture: ComponentFixture<HeaderHologronComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderHologronComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderHologronComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
