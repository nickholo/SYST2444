import { Component, Input } from '@angular/core';
import { campusData } from '../hologronInterface';

@Component({
	selector: 'app-campus-hologron',
	templateUrl: './campus-hologron.component.html',
	styleUrl: './campus-hologron.component.css',
})
export class CampusHologronComponent {
	@Input() campusData991702256!: campusData[];
	campusArray: { campus: string; street: string; city: string }[] = [];
	campus = '';
	campusInfo = '';

	buildString(campus: string) {
		this.campusInfo = '';
		for (let x of this.campusData991702256) {
			if (x.campus === this.campus) {
				this.campusInfo = `${x.campus} Campus <br> ${x.street} <br> ${x.city}`;
			}
		}
	}
}
