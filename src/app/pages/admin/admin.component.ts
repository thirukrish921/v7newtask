import { Component, OnInit ,ElementRef, ViewChild } from '@angular/core';
import {ProfileService} from '../../services/adminprofile/adminprofile.service';
import { ChecktokenService} from '../../services/checktoken/checktoken.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild('loginEmailId', {static: true}) logEmail: ElementRef;
  @ViewChild('loginPassword', {static: true}) logPass: ElementRef;
  @ViewChild('loginForm', {static: true}) logForm: ElementRef;
  @ViewChild('loginResponse', {static: true}) logResp: ElementRef;
  token:string
  constructor(public checktoken: ChecktokenService,public profileServices: ProfileService) {
    
    this.token = sessionStorage.getItem('token');
    console.log(this.token);
    let data = {
      token: this.token
    
     };
    if(this.token!=='null'){
     this.checktoken.check(data).subscribe(
       (res: any) => {
         if(res.status === 200) {
          //console.log(this.token);
             console.log("here");
          location.href = "/adminhome";
         }
         else{
           sessionStorage.clear();
          // location.href = "/admin";
         }
       
       
       
       });
     }

   }

  ngOnInit(): void {
    this.logForm.nativeElement.addEventListener("submit", (event) => {

      event.preventDefault();

      this.logResp.nativeElement.innerText = "Processing...";

      let data = {
        emailId: this.logEmail.nativeElement.value,
        password: this.logPass.nativeElement.value,
      };

      this.profileServices.read(data).subscribe(
        (res: any) => {
          if(res.status === 200) {
            

              sessionStorage.setItem('token', res.profile.token);
              console.log(res.profile.token);
              this.logResp.nativeElement.innerText = "Login Succesfull";
              
            setTimeout(() => {
              this.logResp.nativeElement.innerText = "";
              location.href = "/adminhome";
            }, 1000);
          } else if(res.status === 404) {
            this.logResp.nativeElement.innerText = "Invalid E-Mail ID and Password.";
          } else {
            this.logResp.nativeElement.innerText = "Oops! Problem Occured, Please Try Again Later.";
          }
         
        }, (error) => {
            this.logResp.nativeElement.innerText = "Oops! Problem Occured, Please Try Again Later.";
            // console.log(error);
          }
          );
    
        });
    
      }
    
    }