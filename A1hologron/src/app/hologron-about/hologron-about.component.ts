import { Component, Input } from '@angular/core';
import { HologronPersonal } from '../classHologron';

@Component({
	selector: 'app-hologron-about',
	templateUrl: './hologron-about.component.html',
	styleUrl: './hologron-about.component.css',
})
export class HologronAboutComponent {
	@Input() hologronMe!: HologronPersonal;
}
