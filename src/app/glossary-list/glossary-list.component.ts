import { Component, OnInit } from '@angular/core';
import { GlossaryTerm } from '../models/glossary.model';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { GlossaryTermService } from '../services/glossary-term.service';

@Component({
  selector: 'app-glossary-list',
  imports: [MatListModule, MatCardModule, CommonModule],
  templateUrl: './glossary-list.component.html',
  styleUrl: './glossary-list.component.scss'
})
export class GlossaryListComponent implements OnInit {
  terms: GlossaryTerm[] = [];

  constructor(private router: Router, private service: GlossaryTermService) {}

  navigateToDetail(termId: number): void {
    this.router.navigate([`/glossary-detail/${termId}`]);
  }

  ngOnInit(): void {
    this.fetchTerms();
  }

  fetchTerms(): void {
    this.service.getGlossaryTerms().subscribe(data => {
      this.terms = data;
    });
  }

}


