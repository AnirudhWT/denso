import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/core/services/globalServices/global-data.service';
import { NewProductService } from '../../core/services/new-product-documents/new-product.service';

@Component({
  selector: 'app-new-product-documents',
  templateUrl: './new-product-documents.component.html',
  styleUrls: ['./new-product-documents.component.scss']
})
export class NewProductDocumentsComponent implements OnInit {
  viewButtons: any = [{ name: "Process Flow", selected: false, key: "process" }, { name: "Data Table", selected: true, key: "data" }]
  allProcess: any = [];
  constructor(private newProductServices: NewProductService,
    public globalServices: GlobalDataService) { }
  nodes: any = [
    {
      "label": "Straigtenning",
      "children": [{
        "label": "01_Insert Insulation.pdf",
        "collapsedIcon": "pi pi-file",
      }]
    },
    {
      "label": "Peeling & Cutting",
    },
    {
      "label": "Conductor Moulding",
      "children": [{
        "label": "02_Connector mold.pdf",
        "collapsedIcon": "pi pi-file",
      }]
    },
    {
      "label": "Conductor alignment",
    },
    {
      "label": "Cuffs Assembling",
    },
    {
      "label": "Insulation Modeling",
    },
    {
      "label": "Insutlation Insertion",
    }
  ]
  ngOnInit(): void {
    this.newProductServices.getUploadedSteps().then((response: any) => {
      this.allProcess = response.processes
      this.globalServices.setAllProcess(response.processes)
    })
  }

  checkActiveView(text: any) {
    let temp: any = false
    this.viewButtons.forEach((element: any) => {
      if (text == element.key && element.selected == true) {
        temp = true
      }
    });
    return temp;
  }

  changeView(text: any) {
    this.viewButtons.forEach((element: any) => {
      if (text == element.name) {
        element.selected = true
      }
      else {
        element.selected = false
      }
    });
  }

  getNodes() {
    let temp: any = []
    this.globalServices.getAllProcess() &&
      this.globalServices.getAllProcess().length &&
      this.globalServices.getAllProcess().forEach((element: any) => {
        let rawData: any = []
        element.document &&
          element.document.length > 0 &&
          element.document.forEach((doc: any) => {
            rawData.push({
              "label": doc.name,
              "collapsedIcon": "pi pi-file",
              "data": "Work Folder",
              "expandedIcon": "pi pi-folder-open",
            })
          });

        temp.push({
          "label": element.name,
          "children": rawData
        })
      });
    console.log(temp)
    return temp;
  }
  loadNode(e:any){
debugger
  }
}
