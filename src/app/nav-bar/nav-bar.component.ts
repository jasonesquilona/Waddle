import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { HomePageComponent} from '../home-page/home-page.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatIconModule, HomePageComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
