import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  dataList:any=[
    {
      processstep:"Straight",
      type:"Process",
      count:"Auto-Detected",
      machinname:"Auto-Detected",
      machinedoc:"Auto-Detected"
    },
    {
      processstep:"Straight",
      type:"Process",
      count:"Auto-Detected",
      machinname:"Auto-Detected",
      machinedoc:"Auto-Detected"
    },
    {
      processstep:"Straight",
      type:"Process",
      count:"Auto-Detected",
      machinname:"Auto-Detected",
      machinedoc:"Auto-Detected"
    },
    {
      processstep:"Straight",
      type:"Process",
      count:"Auto-Detected",
      machinname:"Auto-Detected",
      machinedoc:"Auto-Detected"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  sortRecords(order:any){
  }
}
