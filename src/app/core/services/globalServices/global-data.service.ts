import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  allProcess: any = [];
  selectedprocess: any = {};
  step: any = {};
  currentFile: any
  filterOptions: any = [
    {
      label: 'Product Line',
      key: 'productline',
      count: '25',
      isActive: false,
      icon: 'pi pi-th-large'
    },
    {
      label: 'Machine Documents',
      key: 'machinedocuments',
      count: '104',
      isActive: true,
      icon: 'fas fa-align-justify'
    },
    {
      label: 'Product Documents',
      key: 'productdocuments',
      count: '45',
      isActive: false,
      icon: 'fas fa-align-right'
    },
    {
      label: 'Process Documents',
      key: 'processdocuments',
      count: '93',
      isActive: false,
      'icon': 'fas fa-align-right'
    },
    {
      label: 'Factory Documents',
      key: 'factorydocuments',
      count: '66',
      isActive: false,
      'icon': 'fas fa-align-right'
    },
    {
      label: 'Resource Documents',
      key: 'resourcedocuments',
      count: '54',
      isActive: false,
      'icon': 'fas fa-align-justify'
    }
  ]
  selectedFilterOption: any = {}
  constructor() { }

  getFilterOptions() {
    return this.filterOptions;
  }

  getSelectedOption() {
    let temp: any
    this.getFilterOptions().forEach((element: any) => {
      if (element.isActive == true) {
        temp = element
      }
    });
    return temp
  }

  setAllProcess(data: any) {
    this.allProcess = data
  }
  getAllProcess() {
    return this.allProcess;
  }

  setSelectedProcess(data: any) {
    this.selectedprocess = data
  }
  getSelectedProcess() {
    return this.selectedprocess;
  }

  setSelectedStep(data: any) {
    this.step = data
  }
  getSelectedStep() {
    return this.step;
  }

  setCurrentFile(data?: any) {
    if (data) {
      this.currentFile = data
    }
    else {
      this.currentFile = null
    }

  }
  getCurrentFile() {
    return this.currentFile
  }
}
