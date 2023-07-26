import { Component } from '@angular/core';
import { Hotel } from '../hotel.model';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cred :Hotel =new Hotel();
  roles : string[]=["Guest", "User","Admin"];
  flag : boolean= false;
  popup: string="";
constructor(private service: BookingService, private route:Router){
  localStorage.clear();
}

authenticate(){
  this.flag=this.service.validate(this.cred);
  if(this.flag){
  
    localStorage.setItem("Name", this.cred.username);
    localStorage.setItem("Role", this.cred.role);
    
    if(this.cred.role === 'User'){
      this.route.navigate(['home']);
    }
    else if (this.cred.role === 'Admin'){
      this.route.navigate(['admin']);
    }
    else if (this.cred.role === 'Guest'){
      this.route.navigate(['home']);
    }
    
  }
  else{
    this.popup="Invalid credentials"
    this.route.navigate(['/login']);
  }


  
}

}
