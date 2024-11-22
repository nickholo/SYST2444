import { Component, Input } from '@angular/core';
import Hologron from '../hologron';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() x!: Hologron;
}
