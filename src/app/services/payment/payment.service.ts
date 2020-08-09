import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(public httpClient: HttpClient) { }
  readAll() {
    let url = "https://crud-backend-v7.herokuapp.com/payment";
    //console.log(data);
    return this.httpClient.get(url);
  }
}
