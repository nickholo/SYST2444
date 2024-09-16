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
  PERhologron: HologronPersonal = {
    hologronFullName: 'Nick Hologroski',
    hologronStudentNumber: 991702256,
    hologronLoginName: 'hologron',
    hologronSheridanEmail: 'hologron@sheridancollege.ca',
    hologronHomeCampus: 'Trafalgar',
    hologronImageName: '/public/images/man-22.svg',
  };

  CTRYhologron: HologronCountry = {
    hologronCountry: 'Canada',
    hologronID: 124,
    hologronCapital: 'Ottawa',
    hologronAvgSalary: 57100,
    hologronFlag: '/public/assets/Flag_of_Canada.svg',
  };
}
