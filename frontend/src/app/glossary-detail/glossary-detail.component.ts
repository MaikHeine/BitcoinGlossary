import { Component, OnInit } from '@angular/core';
import { GlossaryTerm } from '../models/glossary.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { GlossaryTermService } from '../services/glossary-term.service';



@Component({
  selector: 'app-glossary-detail',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatListModule],
  templateUrl: './glossary-detail.component.html',
  styleUrl: './glossary-detail.component.scss'
})
export class GlossaryDetailComponent implements OnInit {

  term: GlossaryTerm = {
    id: 0,
    term: '',
    description: '',
    explanation: '',
  };

  termId: number = 0;


  constructor(private route: ActivatedRoute, private location: Location, private service: GlossaryTermService) {}

  ngOnInit(): void {
    this.termId = Number(this.route.snapshot.paramMap.get('id'));

    this.fetchTerm();
  }

  fetchTerm(): void {
    this.service.getGlossaryTermById(this.termId).subscribe(data => {
      this.term = data;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
