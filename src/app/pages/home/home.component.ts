import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';
import { PaymentService } from '.././../services/payment/payment.service';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('registerResponse', {static: true}) regResp: ElementRef;
  @ViewChild('formpay', {static: true}) butto: ElementRef;



  token:string
  public payment:PaymentService
  constructor( ) { 
    this.token = sessionStorage.getItem('token');
console.log(this.token);
    if(this.token == undefined) {
      location.href = "/";
    }
  }
  





  handler:any = null;
  tok:any=null;



  ngOnInit(): void {
    this.loadStripe();
    this.butto.nativeElement.submit();
  }






  signOut() {
            sessionStorage.clear();
            location.href = "/authentication";
          
      
  }



//





loadStripe() {
   /*  
  if(!window.document.getElementById('stripe-script')) {
    var s = window.document.createElement("script");
    s.id = "stripe-script";
    s.type = "text/javascript";
    s.setAttribute("data-payment_button_id","pl_FOMfm3vYAjj8yN");
    s.setAttribute("ata-button_text","Pay Now");
    s.setAttribute("data-button_theme","rzp-dark-standard");
    s.setAttribute("src","https://cdn.razorpay.com/static/widget/payment-button.js");
    
      window.document.body.appendChild(s);
      //your code to be executed after 1 second
    window.alert = function() {};
    
  }*/
}
}
    
    
  //



//pk_test_aeUUjYYcx4XNfKVW60pmHTtI