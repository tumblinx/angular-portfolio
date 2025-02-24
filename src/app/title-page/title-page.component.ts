import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'

@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [MatIconModule, MatSidenavModule, RouterOutlet, MatButtonModule, RouterLink, MatToolbarModule],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.scss'
})
export class TitlePageComponent {
  opened: boolean = true
}
