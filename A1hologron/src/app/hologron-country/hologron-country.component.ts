import { Component, Input } from '@angular/core';
import { HologronCountry, HologronPersonal } from '../classHologron';

@Component({
	selector: 'app-hologron-country',
	templateUrl: './hologron-country.component.html',
	styleUrl: './hologron-country.component.css',
})
export class HologronCountryComponent {
	@Input() hologronData!: HologronCountry;
}
