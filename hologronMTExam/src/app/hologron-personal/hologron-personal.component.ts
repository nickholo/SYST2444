import { Component, Input } from '@angular/core';
import { Midterm } from '../hologronClass';

@Component({
	selector: 'app-hologron-personal',
	templateUrl: './hologron-personal.component.html',
	styleUrl: './hologron-personal.component.css',
})
export class HologronPersonalComponent {
	@Input() hologronChild!: Midterm;
}
