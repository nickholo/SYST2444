import { Component, Input } from '@angular/core';
import { a2Personal } from '../hologronInterface';

@Component({
	selector: 'app-header-hologron',
	templateUrl: './header-hologron.component.html',
	styleUrl: './header-hologron.component.css',
})
export class HeaderHologronComponent {
	@Input() hologronMyData!: a2Personal;
}
