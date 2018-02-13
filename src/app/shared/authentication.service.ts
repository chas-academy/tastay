import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {}

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

  register(name: string, email: string, password: string) {
    return this.http.post<any>('http://api.tastay.test/api/auth/register', { name: name, email: email, password: password })
      .map(user => {
        debugger;
      });
  }

  isLoggedIn() {
    const token = localStorage.getItem('currentUser');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }

}
