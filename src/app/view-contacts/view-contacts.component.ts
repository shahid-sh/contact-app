import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent implements OnInit {
  contactId:string = ''
  contact:any = {}
  groupName:string = ''
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){

  }

  ngOnInit(): void {
    // to get path parameter from url 
    this.activatedRoute.params.subscribe((data:any)=>{ 
      this.contactId = data.id
      console.log(this.contactId);
    })
    // to get details of particular contact
    this.api.viewContact(this.contactId)
    .subscribe((result:any)=>{
      console.log(result);
      this.contact = result
      // get group id from contact
      let groupId = this.contact.groupId
        console.log(groupId);
        // api call gor get details
        this.api.viewContactGroupName(groupId)
        .subscribe((data:any)=>{
          console.log(data);
          this.groupName = data.name  
        })
    })
  }
}
