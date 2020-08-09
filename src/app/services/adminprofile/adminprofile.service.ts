import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(public httpClient: HttpClient) { }

  create(data) {
    let url = "https://crud-backend-v7.herokuapp.com/adminprofile/create";
    return this.httpClient.post(url, data);
  }
  read(data) {
    let url = "https://crud-backend-v7.herokuapp.com/adminprofile/read";
    return this.httpClient.post(url, data);
  }
  readAll() {
    let url = "https://crud-backend-v7.herokuapp.com/adminprofile/read";
    return this.httpClient.get(url);
  }
  update(data) {
    let url = "https://crud-backend-v7.herokuapp.com/adminprofile/update";
    return this.httpClient.post(url, data);
  }

  delete(data) {
    let url = "http://localhost:3000/adminprofile/delete";
    return this.httpClient.post(url, data);
  }

}
