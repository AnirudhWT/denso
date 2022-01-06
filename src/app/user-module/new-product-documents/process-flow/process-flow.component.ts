import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from '../../../core/services/globalServices/global-data.service';

@Component({
  selector: 'app-process-flow',
  templateUrl: './process-flow.component.html',
  styleUrls: ['./process-flow.component.scss']
})
export class ProcessFlowComponent implements OnInit {
@Input() allProcess:any
  constructor(private router: Router, public globalServices: GlobalDataService) { }

  ngOnInit(): void {
  }
  goToExplorePage() {
    this.router.navigate(['user/exploreproduct'])
  }
  setProcess(data: any) {
    this.globalServices.setSelectedProcess(data)
  }

  drop(event: any) {
    this.globalServices.getAllProcess().forEach((element: any) => {
      if (element.reference == this.globalServices.getCurrentFile().reference) {
        element.document = [...element.document,this.globalServices.getCurrentFile()]
      }
    });
  }
  
}
