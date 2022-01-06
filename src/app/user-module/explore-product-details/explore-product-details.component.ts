import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from 'src/app/core/services/globalServices/global-data.service';

@Component({
  selector: 'app-explore-product-details',
  templateUrl: './explore-product-details.component.html',
  styleUrls: ['./explore-product-details.component.scss']
})
export class ExploreProductDetailsComponent implements OnInit {
  pdfOpened: boolean = false
  responsiveOptions: any = [
    {
      breakpoint: '1024px',
      numVisible: 7,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 2,
      numScroll: 1
    }
  ];
  zoom: number = 1.02
  shrink: number = 1
  products: any = [
    {
      "name": "Document 1",
      "selected": false
    },
    {
      "name": "Document 2",
      "selected": true
    },
    {
      "name": "Document 3",
      "selected": false
    },
    {
      "name": "Document 4",
      "selected": false
    },
    {
      "name": "Document 5",
      "selected": false
    },
    {
      "name": "Document 6",
      "selected": false
    },
    {
      "name": "Document 7",
      "selected": false
    },
    {
      "name": "Document 8",
      "selected": false
    },
    {
      "name": "Document 9",
      "selected": false
    },
    {
      "name": "Document 10",
      "selected": false
    }, {
      "name": "Document 7",
      "selected": false
    },
    {
      "name": "Document 8",
      "selected": false
    },
    {
      "name": "Document 9",
      "selected": false
    },
    {
      "name": "Document 10",
      "selected": false
    }]
  constructor(public globalServices: GlobalDataService, private router: Router) { }

  ngOnInit(): void {
    if (!this.globalServices.getAllProcess()?.length) {
      this.router.navigate(['user/addproductlinedetails'])
    }
  }

  selectDoc(data: any) {
    this.globalServices.setSelectedProcess(data)
  }
  selectStep(data: any) {
    this.globalServices.setSelectedStep(data)
  }
  handleChange(e: any) {
    // e.index starts from zero
  }
  togglePdfWindow() {
    this.pdfOpened = !this.pdfOpened
  }

  getToptabColor(product: any) {
    return product.approved == true && product.name == this.globalServices.getSelectedStep()?.name ? 'approved-selected-top-tab' :
      product.approved != true && product.name == this.globalServices.getSelectedStep()?.name ? 'not-approved-selected-top-tab' :
        product.approved == true && product.name != this.globalServices.getSelectedStep()?.name ? 'approved-top-tab' :
          product.approved != true && product.name != this.globalServices.getSelectedStep()?.name ? 'not-approved-top-tab' : ''
  }
  getBottomtabColor(product: any) {
    return product.name == this.globalServices.getSelectedProcess().name && this.globalServices.getSelectedProcess()?.steps?.length > 0 ? 'selected-bottom-tab' :
      product.name == this.globalServices.getSelectedProcess().name && this.globalServices.getSelectedProcess()?.steps?.length === 0 ? 'noStepsSelectedtab' :
        product.name != this.globalServices.getSelectedProcess().name && this.globalServices.getSelectedProcess()?.steps?.length > 0 ? 'bottom-tab-btn' :
          product.name != this.globalServices.getSelectedProcess().name && this.globalServices.getSelectedProcess()?.steps?.length === 0 ? 'noStepsNotSelected' : ''
  }

  zoomIn() {
    this.zoom += .25
  }
  zoomOut() {
    this.zoom -= .25
  }
  drop(e:any){
    debugger
  }
}
