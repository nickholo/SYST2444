import { Component, Input } from '@angular/core';
import Student from '../classStudent';

@Component({
	selector: 'app-directives01',
	templateUrl: './directives01.component.html',
	styleUrl: './directives01.component.css',
})
export class Directives01Component {
	@Input() personalData!: Student;
	loginCheck: string = 'hologron@sheridancollege.ca';
	clearLogin() {
		this.loginCheck = '';
	}
}
