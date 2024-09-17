import { Component } from '@angular/core';
import { HologronPersonal, HologronCountry } from './classHologron';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'A1hologron';
	PERhologron: HologronPersonal = {
		hologronName: 'Nick Hologroski',
		hologronNumber: 991702256,
		hologronLogin: 'hologron',
		hologronEmail: 'hologron@sheridancollege.ca',
		hologronCampus: 'Trafalgar',
		hologronImage: 'images/man-22.svg',
	};

	CTRYhologron: HologronCountry = {
		hologronCountry: 'Canada',
		hologronID: 124,
		hologronCapital: 'Ottawa',
		hologronAvgSalary: 57100,
		hologronFlag: 'images/Flag_of_Canada.svg',
	};
}
