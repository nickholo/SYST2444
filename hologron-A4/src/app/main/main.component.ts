import { Component, Input } from '@angular/core';
import { Menu } from '../interfaceMenu';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  @Input() breakfastMenu!: Menu[];
  @Input() lunchMenu!: Menu[];
  @Input() dinnerMenu!: Menu[];
}
