import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-viewer',
  templateUrl: './list-viewer.component.html',
  styleUrls: ['./list-viewer.component.scss']
})
export class ListViewerComponent implements OnInit {
  @Input() labelheading:any
  @Input() status:any
  @Input() scrollingContent:any
  @Input() showPallets:any
  @Input() listHeight:any
  @Input() headingIcon:any
  constructor() { }

  ngOnInit(): void {
  }

}
