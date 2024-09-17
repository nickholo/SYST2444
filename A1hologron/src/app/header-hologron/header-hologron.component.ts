import { Component, Input } from '@angular/core';
import { HologronPersonal } from '../classHologron';

@Component({
	selector: 'app-header-hologron',
	templateUrl: './header-hologron.component.html',
	styleUrl: './header-hologron.component.css',
})
export class HeaderHologronComponent {
	@Input() hologronChild!: HologronPersonal;
	currentDate = new Date();
}
