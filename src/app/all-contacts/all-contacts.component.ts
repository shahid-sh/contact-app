import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
//  to hold all contacts data from api
  allContacts:any =[]
  loginDetails:any = ''
  searchKey:string =''
  constructor(private api:ApiService){

  }
ngOnInit(): void {
this.getAllContact()
}
getAllContact(){
    // api call to get all contacts
    this.api.allContact()
    .subscribe((result:any)=>{
      // result is all contacts array from api 
      console.log(result);
      this.allContacts = result  
    })
}
// deleteContact
deleteContact(contactId:any){
  this.api.deleteContact(contactId)
  .subscribe((data:any)=>{
    
  //  window.location.reload()
  this.getAllContact()
  })
}
}
