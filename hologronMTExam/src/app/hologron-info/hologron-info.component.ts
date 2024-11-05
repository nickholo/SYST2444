import { Component, Input } from '@angular/core';
import { Exam } from '../hologronInterface';
import mtExam from '../assets/data/mtExam.json';

@Component({
	selector: 'app-hologron-info',
	templateUrl: './hologron-info.component.html',
	styleUrl: './hologron-info.component.css',
})
export class HologronInfoComponent {
	@Input() hologronList!: Exam[];
}
