import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ProfileService } from '../../../../services/adminprofile/adminprofile.service';
@Component({
  selector: 'app-addedadmin',
  templateUrl: './addedadmin.component.html',
  styleUrls: ['./addedadmin.component.css']
})
export class AddedadminComponent implements OnInit {
  @ViewChild('processStatus', {static: true}) pStatus: ElementRef;

  @ViewChild('modalForm', {static: true}) mForm: ElementRef;
  @ViewChild('modelProfileId', {static: true}) mProfileId: ElementRef;
  @ViewChild('modalUname', {static: true}) mUname: ElementRef;
  @ViewChild('modalEmail', {static: true}) mEmail: ElementRef;
  @ViewChild('modalResponse', {static: true}) mResp: ElementRef;
  @ViewChild('modalSubmit', {static: true}) mSub: ElementRef;
  @ViewChild('modalReset', {static: true}) mReset: ElementRef;
  @ViewChild('modalClose', {static: true}) mClose: ElementRef;

  dataArray = [];

  constructor(public profileServices: ProfileService) { 


    this.profileServices.readAll().subscribe((res: any) => {
      if(res.status === 404) {
        this.pStatus.nativeElement.innerText = "No Profiles Found";
      } else if(res.status === 200) {
        this.pStatus.nativeElement.innerText = "";
        this.dataArray = res.profiles;
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
    
    this.mForm.nativeElement.addEventListener("submit", (event) => {

      event.preventDefault();

      this.mResp.nativeElement.innerText = "Processing...";

      let data = {
        profileId: this.mProfileId.nativeElement.value,
        username: this.mUname.nativeElement.value,
        mobileNumber: parseInt(this.mEmail.nativeElement.value)
      };
  
      this.profileServices.update(data).subscribe(
        (res: any) => {
          if(res.status === 200) {

            this.mResp.nativeElement.innerText = "Updated Successfully!";

            setTimeout(() => {
              this.mClose.nativeElement.click();
              this.mResp.nativeElement.innerText = "";
              location.href = "/users";
            }, 1000);

          } else {
            this.mResp.nativeElement.innerText = "Oops! Problem Occured, Please Try Again Later.";
          }
          // console.log(res);

        }, (error) => {
          this.mResp.nativeElement.innerText = "Oops! Problem Occured, Please Try Again Later.";
            // console.log(error);
        }
      );
    });
  }

  
  editdata(data)  {
   // console.log("here");
    this.mProfileId.nativeElement.value = data._id;
    this.mUname.nativeElement.value = data.username;
    this.mEmail.nativeElement.value = data.email;

  }

  deletedata(data) {
    if(confirm("Are you sure you want to Delete?")){
      let datae = {
        profileId: data._id
      }

      this.profileServices.delete(datae).subscribe(
        (res: any) => {
          if(res.status === 200) {
            location.href = "/users";
          } else {
            alert("Not Removed");
          }
          // console.log(res);

        }, (error) => {
          alert("Oops! Problem Occured, Please Try Again Later.");
          // console.log(error)
        }
      );
    }
  }

}
