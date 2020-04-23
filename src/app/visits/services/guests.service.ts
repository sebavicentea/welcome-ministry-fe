import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {
  viewDetail: boolean;

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllGuests(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/guests`)
  }

  getGuestsById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/guests/${id}`)
  }


}
