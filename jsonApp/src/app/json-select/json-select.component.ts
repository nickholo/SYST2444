import { Component, Input } from '@angular/core';
import { Courses, Program } from '../interfaceCP';

@Component({
	selector: 'app-json-select',
	templateUrl: './json-select.component.html',
	styleUrl: './json-select.component.css',
})
export class JsonSelectComponent {
	term = '1';
	termArray: { class: string; credit: number; description: string }[] = [];
	@Input() courses!: Courses[];

	ngOnInit() {
		for (let x of this.courses) {
			if (x.term === 1) {
				this.termArray.push({
					class: x.class,
					credit: x.credit,
					description: x.description,
				});
			}
		}
	}

	buildArray(term: string) {
		this.termArray = [];

		for (let x of this.courses) {
			if (x.term === Number(term)) {
				this.termArray.push({
					class: x.class,
					credit: x.credit,
					description: x.description,
				});
			}
		}
	}
}
