import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  profileForm!:FormGroup;
  username=new FormControl('',[Validators.required,Validators.minLength(3)]);
  password = new FormControl('',[Validators.required,Validators.minLength(2)]);
  passwordConfirm = new FormControl('',[Validators.required,Validators.minLength(2)]);

  constructor(private tokenService:TokenService, private router:Router) { 
    this.profileForm=new FormGroup({});
    this.profileForm.setControl('username',this.username);
    this.profileForm.setControl('password',this.password);
    this.profileForm.setControl('passwordConfirm',this.passwordConfirm)
  }
  ngOnInit(): void {
  }

  signUp(){
    if (this.profileForm.valid){
      this.tokenService.registerNewUser(this.username.value,this.password.value,this.passwordConfirm.value);
      this.router.navigate(["/"]);
    }else{
      let usernameControl = this.profileForm.get("username");
      let passwordControl = this.profileForm.get("password");
      console.error("ERROR USUARIO",usernameControl?.errors);
      console.error("ERROR CONTRASEÑA",passwordControl?.errors);
    }
  }

}
