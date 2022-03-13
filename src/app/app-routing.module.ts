import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './guard/can-activate.guard';
import { HomeComponent } from './home/home.component';
import { PhoneListComponent } from './phoneList/phoneList.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"phoneList",component:PhoneListComponent,canActivate: [CanActivateGuard]},
  {path:"login",component:SignInComponent},
  {path:"register",component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
