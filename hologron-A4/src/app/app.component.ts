import { Component } from '@angular/core';
import Hologron from './hologron';
import { HologronService } from './hologron.service';
import { Menu } from './interfaceMenu';
import breakfast from './assets/data/breakfast.json';
import lunch from './assets/data/lunch.json';
import dinner from './assets/data/dinner.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'hologron-A4';
  hologronData: Hologron;
  breakfastMenu: Menu[] = breakfast.breakfast;
  lunchMenu: Menu[] = lunch.lunch;
  dinnerMenu: Menu[] = dinner.dinner;

  constructor(private hologronService: HologronService) {
    this.hologronData = hologronService.hologronData;
  }
}
