import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // all contact- to get all contact data from api
  allContact(){
    // http request to get all contact
    return this.http.get('http://localhost:3000/contacts')
  }

  // api to get particular contact 
  viewContact(contactId:string){
    return this.http.get('http://localhost:3000/contacts/'+contactId)

  }
  // api call for getting particular contact group information
  viewContactGroupName(groupId:string){
    return this.http.get('http://localhost:3000/groups/'+groupId)
  }
  // api call to get all groups
  allGroups(){
    return this.http.get('http://localhost:3000/groups')

  }
  // api call to add new contact details to url
  addContact(contact:any){
    return this.http.post('http://localhost:3000/contacts',contact)
    
  }
  // api call to delete contact
  deleteContact(contactId:any){
    return this.http.delete('http://localhost:3000/contacts/'+contactId)
  }
  // api call for updating existing contact
  updateContact(contactId:string,contactBody:any){
    return this.http.put(' http://localhost:3000/contacts/'+contactId,contactBody)
  }

}
