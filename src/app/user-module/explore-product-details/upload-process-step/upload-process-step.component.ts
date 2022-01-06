import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-process-step',
  templateUrl: './upload-process-step.component.html',
  styleUrls: ['./upload-process-step.component.scss']
})
export class UploadProcessStepComponent implements OnInit {
  uploadedFile:any=false;
  constructor() { }

  ngOnInit(): void {
  }
  uploadFile(e: any, funSOW: any) {
    this.uploadedFile = e.files[0]
  }

  onTempUpError(e: any) {

  }

  removeFile() {
    this.uploadedFile = false
  }
}
