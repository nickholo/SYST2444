import { Component } from '@angular/core';
import Hologron from './hologron';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'hologronA3';
  hologron: Hologron = {
    studentNumber: 991702256,
    studentName: 'Nicklas Hologroski',
    studentLoginName: 'hologron',
    studentCampus: 'Trafalgar',
    studentAssignmentTitle: 'Assignment 3',
  };
}
