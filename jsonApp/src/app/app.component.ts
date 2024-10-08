import { Component } from '@angular/core';
import { Courses, Program } from './interfaceCP';
import cpdata from './assets/data/cp.json';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'jsonApp';
	program: Program = cpdata.ProgramData;
	courses: Courses[] = cpdata.courses;
	displayedColumns: string[] = ['term', 'class', 'credit', 'description'];
}
