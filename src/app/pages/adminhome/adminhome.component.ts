import { Component, OnInit } from '@angular/core';
import {ChecktokenService} from '.././../services/checktoken/checktoken.service';
import {ProfileService} from '../../services/adminprofile/adminprofile.service';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  
  
  token:string
  constructor(public checktoken: ChecktokenService,public profileservice:ProfileService) { 
    this.token = sessionStorage.getItem('token');
    let data = {
     token: this.token
   
    };
   
    this.checktoken.check(data).subscribe(
      (res: any) => {
        if(res.status === 200) {
        //  console.log(this.token);
        //  location.href = "/adminhome";

        }
        else{
          sessionStorage.clear();
          location.href = "/admin";
        }
      
      
      
      });
      


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
