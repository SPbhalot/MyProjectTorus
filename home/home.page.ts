import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  static UserName:string;

  constructor(private router: Router, private fb: FormBuilder
  ) { }

  Visited: boolean = false;
  NotVisited: string = " ";
  submitted: boolean = false;



  Loginform = this.fb.group({
    username: ["", Validators.required],
    Loginpassword: ["", Validators.required]
  })
  get loginForm() {
    this.NotVisited = "";
    return this.Loginform.controls;
  }
  checkUserExist() {
    let forMatch: any = {}

    if (localStorage.getItem("Users")) {
      forMatch = JSON.parse(localStorage.getItem("Users"));

      forMatch.forEach((element: any) => {
        if ((element.username === this.loginForm.username.value) && (element.password === this.loginForm.Loginpassword.value)) {
          this.Visited = true;
          HomePage.UserName = this.loginForm.username.value;
          
        }
      });
      
    }
  }

  SignUpDisplay = () => {
    this.router.navigateByUrl("/sign-up")
  }


  WelComeTorus = () => {
    this.submitted = true;
    if (this.loginForm.username && this.loginForm.Loginpassword.valid) {
      this.checkUserExist()
      if (this.Visited) {
        this.router.navigateByUrl("/welcome-torus")
        this.Loginform.reset();
      } else {
        this.NotVisited = "Username or Password is invalid"
      }
    }
  }
}
