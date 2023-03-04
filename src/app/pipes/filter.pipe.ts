import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContact:any[],searchKey:string,propertyName:string): any [] {
    // array after transform
    const result:any = []
    if(!allContact || searchKey =='' || propertyName==''){
      return allContact
    }
    allContact.forEach((contact:any)=>{
      if(contact[propertyName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(contact)
      }
    })
    return result;
  }

}
