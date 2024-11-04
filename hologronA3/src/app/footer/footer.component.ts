import { Input, Component } from '@angular/core';
import Hologron from '../hologron';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() hologronFooter!: Hologron;
}
