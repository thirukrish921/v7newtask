import { Component, OnInit , ElementRef, ViewChild  } from '@angular/core';
import { ProfileService } from '../../../../services/adminprofile/adminprofile.service';
@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  @ViewChild('userForm', {static: true}) cusForm: ElementRef;
  @ViewChild('username', {static: true}) uname: ElementRef;
  @ViewChild('email', {static: true}) eId: ElementRef;
  @ViewChild('password', {static: true}) pass: ElementRef;
  @ViewChild('confirmpassword', {static: true}) cPass: ElementRef;
  @ViewChild('userResponse', {static: true}) cusResp: ElementRef;
  @ViewChild('userSubmit', {static: true}) cusSub: ElementRef;
  
 
  constructor(public profileServices: ProfileService) { }

  ngOnInit(): void {

    this.cusForm.nativeElement.addEventListener("submit", (event) => {
      
      event.preventDefault();

      this.cusResp.nativeElement.innerText = "Processing...";

      let data = {
        username: this.uname.nativeElement.value,
        emailId: this.eId.nativeElement.value,
        password: this.pass.nativeElement.value,
        
      };
if(this.checkPasswordMatch()==0){

this.cusResp.nativeElement.innerText = "Password Did Not Match";
}
else{
      this.profileServices.create(data).subscribe(
        (res: any) => {
          if(res.status === 200) {

            this.cusResp.nativeElement.innerText = "Added Succesfully";
            

            setTimeout(() => {
              this.cusResp.nativeElement.innerText = "";
              location.href = "/admins";
            }, 1000);

          } else if(res.status === 201) {
            this.cusResp.nativeElement.innerText = "E-Mail is Already Registered.";
          } else {
            this.cusResp.nativeElement.innerText = "Oops! Problem Occured, Please Try Again Later.";
          }
          // console.log(res);
  
        }, (error) => {
          this.cusResp.nativeElement.innerText = "Oops! Problem Occured, Please Try Again Later.";
          // console.log(error);
        }
      );
      }
    });
  
  }
  
  checkPasswordMatch() {
    let password = this.pass.nativeElement.value;
    let confirmPassword = this.cPass.nativeElement.value;

    if(password === confirmPassword) {
      this.cusResp.nativeElement.innerText = "";
      return 1;
    } else {
      this.cusResp.nativeElement.innerText = "Password Did Not Match";
      this.cusSub.nativeElement.setAttribute("disabled", true);
  return 0;
    }
  }


  passwordHandler() {
    console.log("here");
    let passRes = this.checkPasswordMatch();

    
        this.cusSub.nativeElement.removeAttribute("disabled");
     
  }
}
