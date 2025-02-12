import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatListModule, CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {}


  navigateToGlossaryList(): void {
    this.router.navigate([`/glossary-list`]);

  }

}
