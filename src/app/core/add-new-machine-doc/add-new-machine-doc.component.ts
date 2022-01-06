import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-new-machine-doc',
  templateUrl: './add-new-machine-doc.component.html',
  styleUrls: ['./add-new-machine-doc.component.scss']
})
export class AddNewMachineDocComponent implements OnInit {
  uploadForm!: FormGroup;
  @Input() openPopup: any;
  uploadedFileName: any = false
  @Output() togglePopup: EventEmitter<string> = new EventEmitter();
  submitted:any=false
  filteredCountries: any
  // Data from Where suggestions will be picked
  Company: any = [{
    name: "Machine 1"
  }, {
    name: "Machine 2"
  }, {
    name: "Machine 3"
  }, {
    name: "Machine 4"
  }, {
    name: "Machine 5"
  }, {
    name: "Machine 6"
  }]
  constructor() { }

  ngOnInit(): void {
    this.initForm()
  }
  
  initForm() {
    this.uploadForm = new FormGroup({
      docName: new FormControl('', [Validators.required]),
      fileUrl: new FormControl('', [Validators.required]),
    });
  }
  uploadFile(e: any, fubSow: any) {
    this.uploadedFileName = e.files[0]?.name
    this.uploadForm.patchValue({ fileUrl: this.uploadedFileName })
  }
  removeFile() {
    this.uploadedFileName = false
  }
  closePopup() {
    this.togglePopup.emit();
  }
  filterCountry(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.Company.length; i++) {
      if (this.Company[i].name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(this.Company[i]);
      }
    }

    this.filteredCountries = filtered;
  }
  
  submitForm() {
    this.submitted=true
  }
}
