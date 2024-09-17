import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HologronPicsComponent } from './hologron-pics.component';

describe('HologronPicsComponent', () => {
	let component: HologronPicsComponent;
	let fixture: ComponentFixture<HologronPicsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HologronPicsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HologronPicsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
