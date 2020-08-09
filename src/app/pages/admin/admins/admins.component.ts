import { Component, OnInit } from '@angular/core';
import { ChecktokenService} from '../../../services/checktoken/checktoken.service';
import {ProfileService} from '../../../services/adminprofile/adminprofile.service';
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {


  token:string
  constructor(public checktoken: ChecktokenService,public profileservice:ProfileService) { 
    this.token = sessionStorage.getItem('token');
    let data = {
     token: this.token
   
    };
   
    this.checktoken.check(data).subscribe(
      (res: any) => {
        if(res.status === 200) {
            

        }
        else{
          sessionStorage.clear();
          location.href = "/";
        }
      
      
      
      });
      

          
    if(this.token == undefined) {
      location.href = "/";
    }
  }

  ngOnInit(): void {
  }
  
  userloc(){

    location.href = "/users";
  
  }
  adminloc(){
      location.href="/admins";

  }
  homeloc(){

    location.href="/adminhome";
  }
  signOut() {
    sessionStorage.clear();
    location.href = "/authentication";
  
  
  }

    

}

