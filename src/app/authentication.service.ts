import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>('http://api.tastay.test/api/auth/login', { email: username, password: password })
      .map(user => {
        if (user && user.data.access_token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
    // redirect user to login again...
  }
}
