import { Component, Input } from '@angular/core';
import { Courses, Program } from '../interfaceCP';
import cpdata from '../assets/data/cp.json';

@Component({
	selector: 'app-json-table',
	templateUrl: './json-table.component.html',
	styleUrl: './json-table.component.css',
})
export class JsonTableComponent {
	@Input() courses!: Courses[];
	displayedColumns: string[] = ['term', 'class', 'credit', 'description'];
}
