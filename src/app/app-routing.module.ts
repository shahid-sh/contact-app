import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';

const routes: Routes = [
  {
    path:'',component:AllContactsComponent
  },
  // AddContactComponent
  {
    path:'add-contact',component:AddContactsComponent
  },
   // EditContactComponent
  {
    path:'edit-contact/:id',component:EditContactsComponent
  },
  // ViewcontatcComponent
  {
    path:'view-contact/:id',component:ViewContactsComponent
  },
// page not found
{
  path:'**',component:PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
