import { Component } from '@angular/core';
import Student from './classStudent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularDirectives';
  personal: Student = {
    firstName: 'Nick',
    lastName: 'Hologroski',
    id: 991702256,
    login: 'hologron@sheridancollege.ca',
  };
  teststudent: Student = {
    firstName: 'testFirstName',
    lastName: 'testLastName',
    id: 102030444,
    login: 'testLogin',
  };
}
