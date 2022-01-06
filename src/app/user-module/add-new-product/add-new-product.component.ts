import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {
  addproduct!: FormGroup;
  submitted:boolean=false
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.addproduct = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [])
    });
  }
  submitAddProduct(){
this.router.navigate(['user/addproductlinedetails'])
  }
  uploadFile(event: any,fubSOW:any) {
    let file = event.files[0];
    // if (!this.uploadedTemplate) {
      // this.uploadedTemplateError = false;
      // this.uploadedTemplate = file;
      // this.updateErrorMsg(false, '');
      // fubSOW.clear();
    // }
  }

  onTempUpError = (event: any) => {
    if (event && event.currentFiles && !event.currentFiles.length) {
     
    }
  };
}
