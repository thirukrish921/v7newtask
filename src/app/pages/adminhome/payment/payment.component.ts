import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import {PaymentService} from '../../../services/payment/payment.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @ViewChild('processStatus', {static: true}) pStatus: ElementRef;
  customersArray = [];
  constructor(public payment:PaymentService) { 


    this.payment.readAll().subscribe((res: any) => {
      console.log(res);
      if(res.status === 404) {
        this.pStatus.nativeElement.innerText = "No Profiles Found";
      } else if(res.status === 200) {
        
        this.customersArray = res.data;
      } else {
        this.pStatus.nativeElement.innerText = "Oops! Problem Occured, Please Try Again Later.";
      }
      // console.log(res);
    },  (error) => {
      this.pStatus.nativeElement.innerText = "Oops! Problem Occured, Please Try Again Later.";
      // console.log(error);
    } 
    );





  }

  ngOnInit(): void {
  }

}
