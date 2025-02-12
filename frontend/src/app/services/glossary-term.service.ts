import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { GlossaryTerm } from '../models/glossary.model';

@Injectable({
  providedIn: 'root'
})
export class GlossaryTermService implements OnInit{
  API_URL = 'http://localhost:5128/api/glossaryterms';

  constructor(private http: HttpClient) { }

  
  ngOnInit(): void {
  }

  // Fetch all glossary terms
  getGlossaryTerms(): Observable<GlossaryTerm[]> {
    return this.http.get<GlossaryTerm[]>(this.API_URL);
  }

  // Fetch a single glossary term by ID
  getGlossaryTermById(id: number): Observable<GlossaryTerm> {
    return this.http.get<GlossaryTerm>(`${this.API_URL}/${id}`);
  }

}
