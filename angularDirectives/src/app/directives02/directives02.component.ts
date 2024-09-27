import { Component, Input } from '@angular/core';
import Student from '../classStudent';

class Course {
	ccode!: string;
	cname!: string;
	credits!: number;
}

@Component({
	selector: 'app-directives02',
	templateUrl: './directives02.component.html',
	styleUrl: './directives02.component.css',
})
export class Directives02Component {
	@Input() personalData!: Student;
	@Input() testData!: Student;

	city: string = 'Brampton';

	cdate = new Date();

	courseList: Course[] = [
		{ ccode: 'SYST24444', cname: 'Mobile Web', credits: 3 },
		{ ccode: 'PROG32356', cname: '.NET C#', credits: 6 },
		{ ccode: 'INFO20172', cname: 'Project Mgt', credits: 3 },
		{ ccode: 'PROG20799', cname: 'Data Structures', credits: 6 },
	];
}
