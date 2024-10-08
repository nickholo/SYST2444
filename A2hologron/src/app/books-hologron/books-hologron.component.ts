import { Component, Input } from '@angular/core';
import { myBooks } from '../hologronInterface';
@Component({
	selector: 'app-books-hologron',
	templateUrl: './books-hologron.component.html',
	styleUrl: './books-hologron.component.css',
})
export class BooksHologronComponent {
	@Input() myBooks991702256!: myBooks[];
	displayedColumns: string[] = ['authorName', 'bookTitle', 'published'];
}
