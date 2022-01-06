import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  submitted:boolean=false
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signInForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  submitSignIn(){
    this.submitted = true;
    if (!this.signInForm.invalid) {
      // API call to login
this.router.navigate(['user'])
    }
  }
}
