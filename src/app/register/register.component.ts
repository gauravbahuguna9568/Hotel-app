import { Component } from '@angular/core';
import { Hotel } from '../hotel.model';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  detail: Hotel = new Hotel();
  role: string[]=["Admin", "User","Guest"];

constructor(private service :BookingService, private router:Router){}
save(){
  this.service.persist(this.detail)
  this.router.navigate(['/login'])
}
}
