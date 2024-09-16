import { Component } from '@angular/core';
import { HologronPersonal } from './classHologron';
import { HologronCountry } from './classHologron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'A1hologron';
  PERhologron = new HologronPersonal(
    'Nick Hologroski',
    991702256,
    'hologron',
    'hologron@sheridancollege.ca',
    'Trafalgar',
    '/public/images/man-22.svg'
  );

  CTRYhologron = new HologronCountry(
    'Canada',
    124,
    'Ottawa',
    57100,
    '/public/assets/Flag_of_Canada.svg'
  );
}
