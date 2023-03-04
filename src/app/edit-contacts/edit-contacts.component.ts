import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mycontacts } from 'src/model/mycontact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.component.html',
  styleUrls: ['./edit-contacts.component.css']
})
export class EditContactsComponent implements OnInit {
  contactId:string=""
  contact:mycontacts = {}
  allGroups:any=[]
  constructor(private editContactActivatedRoute:ActivatedRoute,private api:ApiService,private editCOntactRouter:Router){
    
  }
  ngOnInit(): void {
    // to get path parameter from url
    this.editContactActivatedRoute.params
    .subscribe((data:any)=>{
      this.contactId=data.id
      console.log(this.contactId);
    })
    // to get details of particular contact
    this.api.viewContact(this.contactId)
    .subscribe((result:any)=>{
      this.contact = result
      console.log(this.contact);
    })
    // get all groups from api
    this.api.allGroups()
    .subscribe((groups:any)=>{
      console.log(groups);
      this.allGroups = groups   
    })    
  }
  editContact(contact:mycontacts){
    this.api.updateContact(this.contactId,contact)
    .subscribe((result:any)=>{
      alert('Existing contact details are updated')   
      // redirect to all contact page
      this.editCOntactRouter.navigateByUrl('')
    })
  }

}
