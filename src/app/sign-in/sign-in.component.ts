import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  profileForm!:FormGroup;
  username=new FormControl('',[Validators.required,Validators.minLength(3)]);
  password = new FormControl('',[Validators.required,Validators.minLength(2)]);

  constructor(private tokenService:TokenService,private router:Router) { 
    this.profileForm=new FormGroup({});
    this.profileForm.setControl('username',this.username);
    this.profileForm.setControl('password',this.password);
  }

  ngOnInit(): void {
  }

  login(){
    if (this.profileForm.valid){
      this.tokenService.getAccessToken(this.username.value,this.password.value);
      this.router.navigate(["/"]);
    }else{
      let usernameControl = this.profileForm.get("username");
      let passwordControl = this.profileForm.get("password");
      console.error("ERROR USUARIO",usernameControl?.errors);
      console.error("ERROR CONTRASEÑA",passwordControl?.errors);
    }
  }

}
