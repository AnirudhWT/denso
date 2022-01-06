import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilService } from '../../core/services/utils/util.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  submitted: boolean = false
  roles: any = [{ name: "developer" }, { name: "tester" }, { name: "tech lead" }]
  selectedJob: any = { name: "developer" }
  constructor(private utilServices: UtilService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signUpForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, this.utilServices.validatePhoNum()]),
      companyname: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required])

    });
  }
  handleJobSelection(e: any) {
    this.roles.forEach((element: any) => {
      if (e.value == element.name) {
        this.selectedJob = element
      }
    });
  }
  submitSignIn() {
    this.submitted = true;
    if (!this.signUpForm.invalid) {
      // API call to login
    }
  }
}
