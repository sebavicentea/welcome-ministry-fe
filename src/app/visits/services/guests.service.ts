import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../../core/services/auth.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuestsService {
  viewDetail: boolean;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllGuests(payload): Observable<any> {
    const queryParams = this.buildSortedQuery(payload);
    console.log(`http://localhost:3000/api/guests?${queryParams}`)
    // return of({})
    return this.http.get<any>(
      `http://localhost:3000/api/guests?${queryParams}`
    );
  }

  getGuestsById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/guests/${id}`);
  }

  addGuest(payload): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/api/guests`, payload);
  }

  updateGuest(id, payload): Observable<any> {
    return this.http.put<any>(
      `http://localhost:3000/api/guests/${id}`,
      payload
    );
  }

  private buildSortedQuery(args) {
    return Object.keys(args)
      .sort()
      .map((key) => {
        return (
          window.encodeURIComponent(key) +
          '=' +
          window.encodeURIComponent(args[key])
        );
      })
      .join('&');
  }
}
