import { Component, OnInit } from '@angular/core';
import { Validators,Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ProjectService } from '../project.service';





@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private servise: ProjectService) { }
  user: any = {};
  submitted = false;
  PasswordMatch = false;

 

  RegistrationForm = this.fb.group({
    firstname: ['', Validators.compose([
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z ]*'),
      Validators.required,
    ]) ],
    lastname:  ['', Validators.compose([
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z ]*'),
      Validators.required,
    ]) ],
    
    username:  ['', Validators.compose([
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z ]*'),
      Validators.required,
    
    ]) ],
    password:  ['', Validators.compose([
      Validators.minLength(8),
      Validators.required,
    ]) ],
    confirmpassword:  ['', Validators.compose([
      Validators.minLength(8),
      Validators.required,

    ]) ]
  })



  
  get f() {
    return this.RegistrationForm.controls
  }

  SubmitForm() {
    this.submitted = true;

    if (
      this.f.firstname.valid && this.f.lastname.valid && this.f.username.valid && this.f.password && this.f.confirmpassword
    ) {
      this.mustmatch();
      if (this.PasswordMatch) {
        this.user = Object.assign(this.user, this.RegistrationForm.value)
        this.servise.MultiUsers(this.user);
        this.RegistrationForm.reset()
        this.router.navigateByUrl("/home")
      }
    }

    
  }
  BackPage = () => {
    this.router.navigateByUrl(`/home`);
  }
  mustmatch() {
    if(this.f.password.value === this.f.confirmpassword.value){
      this.PasswordMatch = true;
      
    }
     
    }
  



  ngOnInit() {
    this.RegistrationForm

  }

}


