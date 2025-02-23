import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

const USER_API_URL = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);
  postUser(user: { name: string }) {
    return this.http.post(USER_API_URL, user).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
