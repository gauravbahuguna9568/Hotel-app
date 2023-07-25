import { Injectable } from '@angular/core';
import { Hotel } from '../hotel.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
details: Hotel[]=[];
private static baseUrl: string ="http://localhost:3000";
  constructor(private http: HttpClient) 
  {
      this.http.get<Hotel[]>(BookingService.baseUrl+"/data/").subscribe(data => this.details=data)
   }
    //this is for pushing the data to the json server
  persist(detail:Hotel){
    this.http.post(BookingService.baseUrl+"/data/", detail).subscribe(data=>data=detail)
  }
  //this is for listing all the item present in the array object
  list(){
    return this.http.get<Hotel[]>(BookingService.baseUrl+"/data/");
  }
  // for updating
  update(details: Hotel){
    this.http.put(BookingService.baseUrl+"/data/"+details.Lid, details).subscribe(data=> data= details)
  }
  //for removing
  remove(id:number){
    this.http.delete(BookingService.baseUrl+"/data/"+id).subscribe()
    }
   validate( cred: Hotel):boolean{
    for(let i=0 ; i<this.details.length; i++){

      if(cred.username==this.details[i].username && cred.password ==this.details[i].password && cred.role == this.details[i].role)
          return true;
      
    }
    return false;
  }


}
