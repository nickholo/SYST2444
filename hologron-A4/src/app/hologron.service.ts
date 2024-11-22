import { Injectable } from '@angular/core';
import Hologron from './hologron';

@Injectable({
  providedIn: 'root',
})
export class HologronService {
  hologronData: Hologron = {
    studentNumber: 991702256,
    studentName: 'Nicklas Hologroski',
    studentLoginName: 'Hologron',
    studentCampus: 'Trafalgar',
    studentAssignmentTitle: 'Assignment 4',
  };

  constructor() {}
}
