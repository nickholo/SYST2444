import { Component } from '@angular/core';
import { Midterm } from './hologronClass';
import { Exam } from './hologronInterface';
import mtExam from './assets/data/mtExam.json';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'hologronMTExam';
	hologronPersonal: Midterm = {
		LASThologron: 'Hologroski',
		FIRSThologron: 'Nicklas',
		IDhologron: '991702256',
		LOGINhologron: 'hologron',
	};
	hologronJSON: Exam[] = mtExam.LifeCycles;
}
