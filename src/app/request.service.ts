import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(private http: HttpClient) { }

  public getUser() {
    return this.http.get('https://reqres.in/api/users');
  }

  public addNewUser(newUser) {
    return this.http.post('https://reqres.in/api/users', newUser);
  }
}
