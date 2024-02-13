import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ HomeComponent , NavbarComponent , RouterOutlet],
})
export class AppComponent {
  title = 'spaceX';
}
