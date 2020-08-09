import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChecktokenService {

  constructor(public httpClient: HttpClient) { }
  check(data) {
    let url = "https://crud-backend-v7.herokuapp.com/token/check";
    //console.log(data);
    return this.httpClient.post(url, data);
  }
}
