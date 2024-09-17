import { Component, Input } from '@angular/core';
import { HologronPersonal, HologronCountry } from '../classHologron';

@Component({
	selector: 'app-hologron-pics',
	templateUrl: './hologron-pics.component.html',
	styleUrl: './hologron-pics.component.css',
})
export class HologronPicsComponent {
	@Input() hologronMe!: HologronPersonal;
	@Input() hologronData!: HologronCountry;
}
