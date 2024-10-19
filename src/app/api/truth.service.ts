import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Truth} from '../models/truth.model';

@Injectable({
  providedIn: 'root'
})
export class TruthService {
  private apiUrl = 'http://localhost:9001/api/truths'; // Adjust to your API endpoint

  constructor(private http: HttpClient) { }

  getTruths(): Observable<Truth[]> {
    return this.http.get<Truth[]>(this.apiUrl);
  }

  getTruth(id: number): Observable<Truth> {
    return this.http.get<Truth>(`${this.apiUrl}/${id}`);
  }

  createTruth(truth: Truth): Observable<Truth> {
    return this.http.post<Truth>(this.apiUrl, truth);
  }

  updateTruth(truth: Truth): Observable<Truth> {
    return this.http.put<Truth>(`${this.apiUrl}/${truth.id}`, truth);
  }

  deleteTruth(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
