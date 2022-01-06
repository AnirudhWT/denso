import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../services/globalServices/global-data.service';

@Component({
  selector: 'app-document-library',
  templateUrl: './document-library.component.html',
  styleUrls: ['./document-library.component.scss']
})
export class DocumentLibraryComponent implements OnInit {
  allFiles:any=[
    {
      name:'sample1.pdf',
      url:'assets/testdocs/',
      reference:1
    },
    {
      name:'sample.pdf',
      url:'assets/testdocs/',
      reference:2
    },
    {
      name:'Get_Started_With_Smallpdf.pdf',
      url:'assets/testdocs/',
      reference:3
    },
    {
      name:'dummy.pdf',
      url:'assets/testdocs/',
      reference:4
    },
    {
      name:'Sample2.pdf',
      url:'assets/testdocs/',
      reference:5
    },
    {
      name:'Sample3.pdf',
      url:'assets/testdocs/',
      reference:6
    },
    {
      name:'Sample3.pdf',
      url:'assets/testdocs/',
      reference:7
    }
  ]
  constructor(private globalServices:GlobalDataService) { }

  ngOnInit(): void {
  }
  dragStart(e:any,item:any){
    this.globalServices.setCurrentFile(item)
  }
  dragEnd(e:any){
    this.globalServices.setCurrentFile();
  }
}
