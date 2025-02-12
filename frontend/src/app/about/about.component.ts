import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private router: Router){}

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}
