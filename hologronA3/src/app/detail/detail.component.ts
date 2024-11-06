import { Input, Component } from '@angular/core';
import Song from '../songInfo';
import { songList } from '../../assets/data/mySongs';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrl: './detail.component.css',
})
export class DetailComponent {
	@Input() list: Song[] = songList;
	handleClick(index: number) {
		const song = this.list[index];
		const pictureOutput = document.getElementById('pictureOutput');
		const infoOutput = document.getElementById('infoOutput');
		if (pictureOutput) {
			pictureOutput.innerHTML = `<img id="image" src="/images/${song.picture}" alt="${song.name}" >`;
		}
		if (infoOutput) {
			infoOutput.innerHTML = `<h4>${song.name} by ${song.artist}</h4>
        <p>Genre: ${song.genre}</p>
        <p>Year Released: ${song.yearReleased}</p>`;
		}
	}
}
