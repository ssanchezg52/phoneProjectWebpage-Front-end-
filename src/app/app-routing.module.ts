import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhoneListComponent } from './phoneList/phoneList.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"phoneList",component:PhoneListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
