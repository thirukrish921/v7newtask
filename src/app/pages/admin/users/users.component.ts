import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { ChecktokenService} from '../../../services/checktoken/checktoken.service';
import {ProfileService} from '../../../services/Profile/profile.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


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
  homeloc(){

    location.href="/adminhome";
  }
  adminloc(){
      location.href="/admins";

  }
  signOut() {
    sessionStorage.clear();
    location.href = "/authentication";
  
  
  }

    

}
