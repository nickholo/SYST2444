import { Input, Component } from '@angular/core';
import Song from '../songInfo';
import { songList } from '../assets/data/mySongs';

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
      pictureOutput.innerHTML = `<img src="${song.picture}" alt="${song.name}" width="200px" height="200px">`;
    }
    if (infoOutput) {
      infoOutput.innerHTML = `<p>${song.name} by ${song.artist}</p>
        <p>Genre: ${song.genre}</p>
        <p>Year Released: ${song.yearReleased}</p>`;
    }
  }
}
