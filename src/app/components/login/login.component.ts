import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieBookingService } from 'src/app/services/movie-booking.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:MovieBookingService, private route:Router) { }
  isfailure = false;
  loginClass={
    "email":null as string| null,
    "password":""
  }; 
 
  ngOnInit(): void {
  }
 
  onSubmit(){
    this.service.login(this.loginClass).subscribe((response)=>{
      if(response!="User not found"){
        localStorage.setItem('user', response.toString());
        this.route.navigate([`/`]).then(() =>{
          window.location.reload();
        });
      }else{
        alert("User Not Found :(");
        window.location.reload();
      }
      //console.log(response);
    });
  }

}
