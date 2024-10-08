import { Component } from '@angular/core';
import { a2Personal, myBooks, campusData } from './hologronInterface';
import jsonData from './assets/data/Assignment02.json';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'A2hologron';
	hologronPersonal: a2Personal = jsonData.a2Personal;
	hologronBooks: myBooks[] = jsonData.myBooks;
	hologronCampus: campusData[] = jsonData.campusData;
}
