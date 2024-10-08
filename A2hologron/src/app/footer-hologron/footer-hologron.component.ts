import { Component, Input } from '@angular/core';
import { a2Personal } from '../hologronInterface';

@Component({
	selector: 'app-footer-hologron',
	templateUrl: './footer-hologron.component.html',
	styleUrl: './footer-hologron.component.css',
})
export class FooterHologronComponent {
	@Input() hologronMyData!: a2Personal;
}
