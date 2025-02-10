import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate([`/home`]);

  }

  navigateToGlossaryList(): void {
    this.router.navigate([`/glossary-list`]);

  }

  navigateToAbout(): void {
    this.router.navigate([`/about`]);

  }

  navigateToContact(): void {
    this.router.navigate([`/contact`]);

  }
}
